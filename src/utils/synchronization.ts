import { getCustomerInfo, getHistoryOrder, loginOnApp, getAccount, getHistoryOrderCost } from '@service/api/usersApi'
import { getAround } from '@service/api/carsInfoApi'
import { CollectionName } from '@constant/index'
import DB from '@mongodb/db'
import { printLog } from '@utils/commons'
import config from '@config/index'

// 用户信息
async function getUserInfo(args, phone) {
    const res = await getCustomerInfo(args)
    if (res.status === 1) {
        const recode = await DB.find(CollectionName.userInfo, { phone })
        if (!recode.length) {
            // 不存在才插入
            const dbres = await DB.insert(CollectionName.userInfo, res.data)
            if (dbres.status === 'success') {
            }
        } else {
            printLog('无须同步用户信息', 'info')
        }
        return {
            status: 'ok'
        }
    } else {
        printLog('ddtoken过期', 'error')
        return {
            status: 'err'
        }
    }
}
// 行程信息
async function journey(args, phone) {
    const res = await getHistoryOrder(args)
    if (res.status === 1) {
        const recode = await DB.find(CollectionName.journey, { phone })
        if (!recode.length) {
            // 不存在才插入
            const dbres = await DB.insert(CollectionName.journey, { phone, data: res.data })
            if (dbres.status === 'success') {
                printLog('行程信息同步成功', 'info')
            }
        } else {
            printLog('无须同步行程信息', 'info')
        }
    } else {
        printLog('ddtoken过期', 'error')
    }
}
// 余额
async function Account(args, phone) {
    const res = await getAccount(args)
    if (res.status === 1) {
        const recode = await DB.find(CollectionName.account, { phone })
        if (!recode.length) {
            // 不存在才插入
            const dbres = await DB.insert(CollectionName.account, { phone, data: res.data })
            if (dbres.status === 'success') {
                printLog('余额信息同步成功', 'info')
            }
        } else {
            printLog('无须同步余额信息', 'info')
        }
    } else {
        printLog('ddtoken过期', 'error')
    }
}
// 附近车辆信息
async function AroundCar(args) {
    const res = await getAround(args)
    if (res.status === 1) {
        const recode = await DB.find(CollectionName.aroundCar)
        if (!recode.length) {
            // 不存在才插入
            const dbres = await DB.insertMany(CollectionName.aroundCar, res.data)
            if (dbres.status === 'success') {
                printLog('车辆信息同步成功', 'info')
            }
        } else {
            printLog('无须同步车辆信息', 'info')
        }
    } else {
        printLog('ddtoken过期', 'error')
    }
}
// 花费
async function Cost(args, phone) {
    const res = await getHistoryOrderCost(args)
    if (res.status === 1) {
        const recode = await DB.find(CollectionName.cost, { phone })
        if (!recode.length) {
            // 不存在才插入
            const dbres = await DB.insert(CollectionName.cost, { phone, data: res.data })
            if (dbres.status === 'success') {
                printLog('花费信息同步成功', 'info')
            }
        } else {
            printLog('无须同步花费信息', 'info')
        }
    } else {
        printLog('ddtoken过期', 'error')
    }
}
// 同步
async function synchronization(ddToken, phone) {
    // 请求第一个接口顺便检验ddToken合法性
    const checkToken = await getUserInfo(
        {
            token: ddToken,
            lang: 'cn'
        },
        phone
    )
    if (checkToken.status === 'err') {
        const newDd = await refreshDdToken(phone)
        await synchronization(newDd.token, phone)
    } else {
        journey({ pageNo: 1, pageSize: 10000, token: ddToken }, phone)
        Account(
            {
                token: ddToken,
                lang: 'cn'
            },
            phone
        )
        AroundCar({
            token: ddToken,
            lang: 'cn',
            lat: 22.981987999999998,
            lon: 113.3681641,
            radius: 10000000
        })
        Cost(
            {
                token: ddToken,
                lang: 'cn'
            },
            phone
        )
    }
}
// 获取新的ddToken
export async function refreshDdToken(phone) {
    const userRecord = await DB.find(CollectionName.ddTokenPhoneMap, { phone })
    const data = {
        phone,
        ...config.loginArgs,
        deviceid: userRecord[0].deviceid
    }
    const res = await loginOnApp(data)
    if (res.status === 1) {
        await DB.updateOne(CollectionName.ddTokenPhoneMap, { phone: data.phone }, { token: res.data.token })
        return {
            token: res.data.token
        }
    } else {
        printLog('登录叮叮失败', 'error')
        return {
            err: '登录叮叮失败'
        }
    }
}
export default synchronization
