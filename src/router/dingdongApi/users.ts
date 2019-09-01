import moment from 'moment'
import Router from 'koa-router'
import uuidV1 from 'uuid/v1'

import { qiniuUpload, delay } from '@utils/commons'
import config from '@config/index'
import DB from '@mongodb/db'
import { CollectionName } from '@constant/index'

import {
    loginOnApp,
    getCustomerInfo,
    getAccount,
    getVerify,
    getHistoryOrder,
    getHistoryOrderCost,
    getImageVerifyCode
} from '@service/api/usersApi'
import Db from '@mongodb/db'

const UserInfoRouter = new Router()

// 登录叮叮
UserInfoRouter.post('/login', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await loginOnApp(params)
    // const res = {
    //     status: 1,
    //     token: 'androidv999vf895f96b117548bc820dc5cef8009ef1'
    // }
    let dbStatus
    if (res.status === 1) {
        // 存token和phone的对应关系
        const record = await DB.find(CollectionName.ddTokenPhoneMap, { phone: data.phone })
        if (!record.length) {
            dbStatus = await DB.insert(CollectionName.ddTokenPhoneMap, { ...data })
        } else {
            dbStatus = await DB.updateOne(CollectionName.ddTokenPhoneMap, { phone: data.phone }, { token: data.token })
        }
    }
    if (dbStatus && dbStatus['status'] === 'success') {
        ctx.body = {
            data: { ...res },
            status: 1
        }
    } else {
        ctx.body = {
            data: { ...res },
            status: 2
        }
    }
})
// 获取验证码
UserInfoRouter.post('/getVerify', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getVerify(params)
    ctx.body = {
        ...res
    }
})
// 获取验证码图片
UserInfoRouter.post('/getImageVerifyCode', async (ctx, next) => {
    const data = {
        verifyId: uuidV1(),
        path: './',
        name: 'verify.png'
    }
    // 保存图片到本地
    await getImageVerifyCode(data)
    await delay(200)
    const res = await qiniuUpload({
        filePath: './verify.png',
        filename: 'verify.png',
        prefix: `${uuidV1()}/${new Date().getTime()}/xy`
    })
    if (res.type === 'err') {
        ctx.body = {
            status: 2
        }
    } else {
        ctx.body = {
            status: 1,
            data: {
                url: config.qiniu.sourceUrl + res.key,
                verifyId: data.verifyId
            }
        }
    }
})
// 用户信息
UserInfoRouter.post('/getCustomerInfo', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getCustomerInfo(params)
    // 用户信息存本地数据库
    try {
        const json = await Db.find(CollectionName.userInfo, { id: res.data.id })
        if (!json.length) {
            Db.insert(CollectionName.userInfo, res.data)
        }
    } catch {}
    ctx.body = {
        ...res
    }
})
// 余额
UserInfoRouter.post('/getAccount', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getAccount(params)
    ctx.body = {
        ...res
    }
})
// 历史租车情况
UserInfoRouter.post('/getHistoryOrder', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getHistoryOrder(params)
    ctx.body = {
        ...res
    }
})
// 获取历史租车包含价格
UserInfoRouter.get('/getHistoryOrderCost', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getHistoryOrderCost(params)
    const parseData: { date: string; cost: number; reallyCost: number }[] = []
    res.data.forEach(v => {
        const key = moment(v.takeTime).format('YY-MM')
        if (!parseData.length || parseData[parseData.length - 1]['date'] !== key) {
            parseData.push({
                date: key,
                cost: v.actualPayments,
                reallyCost: v.actualPayments * 0.6
            })
        } else {
            const item = parseData[parseData.length - 1]
            item.cost = v.actualPayments + item.cost
            item.reallyCost = v.actualPayments * 0.6 + item.reallyCost
        }
    })

    ctx.body = {
        ...res,
        data: parseData
    }
})

export default UserInfoRouter
