import Router from 'koa-router'

import DB from '@mongodb/db'
import { CollectionName } from '@constant/index'
import { getPhoneByToken, getDdTokenByToken } from '@utils/commons'
import { getCustomerInfo, getHistoryOrderCost } from '@service/api/usersApi'

const UsersInfoRouter = new Router()

// 获取用户信息
UsersInfoRouter.get('/', async (ctx, next) => {
    const data = ctx.request.query

    // 先查本地服务器，没有再查叮叮
    const phone = await getPhoneByToken(data.token)
    const ddToken = await getDdTokenByToken(data.token)
    const res = await DB.find(CollectionName.userInfo, { phone })
    let info
    try {
        if (!res.length) {
            info = await getCustomerInfo({ token: ddToken })
            await DB.insert(CollectionName.userInfo, { ...info.data })
        }
        ctx.body = { status: 1, data: res[0] || info.data }
    } catch (err) {
        ctx.body = { status: 0, err }
    }
    await next()
})
// 统计租过的车辆，按车牌划分
UsersInfoRouter.get('/summaryCarNum', async (ctx, next) => {
    const data = ctx.request.query
    let obj = {}
    function summaryCarNum(item) {
        if (!!obj[item.carNum]) {
            obj[item.carNum].push(item)
        } else {
            obj[item.carNum] = [item]
        }
    }
    const phone = await getPhoneByToken(data.token)
    let record
    record = await DB.find(CollectionName.driveCarNums, { phone })
    // 没查询到历史订单，根据历史订单数据构造数据
    if (!record.length) {
        const list = await DB.find(CollectionName.journey, { phone })
        list[0].data.forEach(v => {
            summaryCarNum(v)
        })
        DB.insert(CollectionName.driveCarNums, { data: obj, phone })
    } else {
        obj = record
    }
    try {
        ctx.body = { status: 1, data: record[0].data }
    } catch (err) {
        ctx.body = { status: 0, err }
    }
    try {
        ctx.body = { status: 1, data: obj[0].data }
    } catch (err) {
        ctx.body = { status: 0, err }
    }
    await next()
})
// 花费统计
UsersInfoRouter.get('/cost', async (ctx, next) => {
    const data = ctx.request.query
    const phone = await getPhoneByToken(data.token)
    const record = await DB.find(CollectionName.cost, { phone })
    function summaryMonth(res) {
        const data: any[] = []
        res.forEach(v => {
            const date = v.takeTime.substr(0, 7)
            const currentMonthIdx = data.findIndex(v => Object.keys(v).includes(date))
            if (currentMonthIdx > -1) {
                data[currentMonthIdx][date] += v.totalPayments
            } else {
                const obj = {}
                obj[date] = 0
                data.push(obj)
            }
        })
        return data
    }
    if (!record.length) {
        const ddToken = await getDdTokenByToken(data.token)
        const res = await getHistoryOrderCost({
            token: ddToken,
            lang: 'cn'
        })
        if (res.status === 1) {
            await DB.insert(CollectionName.cost, { phone, data: res.data })
            ctx.body = { status: 1, data: summaryMonth(res.data) }
        } else {
            ctx.body = { status: 2, message: '没权限' }
        }
    } else {
        ctx.body = { status: 1, data: summaryMonth(record[0].data) }
    }
    await next()
})
// 余额
UsersInfoRouter.get('/getAccount', async (ctx, next) => {
    const data = ctx.request.query
    const phone = await getPhoneByToken(data.token)
    try {
        const record = await DB.find(CollectionName.account, { phone })
        ctx.body = { status: 1, data: record[0].data }
    } catch {
        ctx.body = { status: 0, message: '获取失败' }
    }
})
// 修改头像
UsersInfoRouter.post('/edit-avatar', async (ctx, next) => {
    const data = ctx.request.body
    if (!data.urlPath) {
        ctx.body = { message: '参数有误' }
        ctx.status = 400
    }
    const phone = await getPhoneByToken(data.token)
    try {
        await DB.updateOne(CollectionName.userInfo, { phone }, { img: data.urlPath })
        ctx.body = { status: 1, message: '修改成功' }
    } catch {
        ctx.body = { status: 0, message: '修改失败' }
    }
})
// 修改昵称
UsersInfoRouter.post('/edit-nickname', async (ctx, next) => {
    const data = ctx.request.body
    if (!data.nickname) {
        ctx.body = { message: '参数有误' }
        ctx.status = 400
    }
    const phone = await getPhoneByToken(data.token)
    try {
        await DB.updateOne(CollectionName.userInfo, { phone }, { niceName: data.nickname })
        ctx.body = { status: 1, message: '修改成功' }
    } catch {
        ctx.body = { status: 0, message: '修改失败' }
    }
})

export default UsersInfoRouter
