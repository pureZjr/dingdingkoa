import Router from 'koa-router'

import { getDdTokenByToken, getPhoneByToken } from '@utils/commons'
import { getAround, getHistoryReturnPosition, getLimit, getStationCar } from '@service/api/carsInfoApi'
import { refreshDdToken } from '@utils/synchronization'

const CarRouter = new Router()

// 获取附近车辆
CarRouter.post('/around', async (ctx, next) => {
    const data = ctx.request.body
    if (!data.lat || !data.lon || !data.radius) {
        ctx.body = { message: '参数有误' }
        ctx.status = 400
    } else {
        if (!!data.token) {
            const ddToken = await getDdTokenByToken(data.token)
            const res = await getAround({ ...data, token: ddToken })
            if (res.status === 2) {
                // 重新获取叮叮token
                const phone = await getPhoneByToken(data.token)
                await refreshDdToken(phone)
                const ddToken = await getDdTokenByToken(data.token)
                const res = await getAround({ ...data, token: ddToken })
                ctx.body = {
                    ...res
                }
            } else {
                ctx.body = {
                    ...res
                }
            }
        } else {
            const res = await getAround({ ...data, token: 123456 })
            ctx.body = {
                ...res
            }
        }
    }
    await next()
})
// 获取历史还车记录
CarRouter.post('/getHistoryReturnPosition', async (ctx, next) => {
    const data = ctx.request.body
    const ddToken = await getDdTokenByToken(data.token)
    const res = await getHistoryReturnPosition({ token: ddToken })
    ctx.body = {
        ...res
    }
    await next()
})
// 获取还车点限制信息
CarRouter.post('/getLimit', async (ctx, next) => {
    const data = ctx.request.body
    if (!data.type || !data.stationId || !data.oppositeStationId) {
        ctx.body = { message: '参数有误' }
        ctx.status = 400
    }
    const ddToken = await getDdTokenByToken(data.token)
    const res = await getLimit({ ...data, token: ddToken })
    ctx.body = {
        ...res
    }
    await next()
})
// 当前站点的车辆
CarRouter.post('/getStationCar', async (ctx, next) => {
    const data = ctx.request.body
    if (!data.stationId || !data.seat) {
        ctx.body = { message: '参数有误' }
        ctx.status = 400
    }
    const ddToken = await getDdTokenByToken(data.token)
    const res = await getStationCar({ ...data, token: ddToken })
    ctx.body = {
        ...res
    }
    await next()
})
export default CarRouter
