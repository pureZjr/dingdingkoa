// 车辆信息
import Router from 'koa-router'

import { getAround, getStationCar, getHistoryReturnPosition, getLimit } from '@service/api/carsInfoApi'

const CarInfoRouter = new Router()

// 当前位置附件站点
CarInfoRouter.post('/getAround', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getAround(params)
    ctx.body = {
        ...res
    }
})
// 当前站点的车辆
CarInfoRouter.post('/getStationCar', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getStationCar(params)
    ctx.body = {
        ...res
    }
})
// 历史还车点
CarInfoRouter.post('/getHistoryReturnPosition', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getHistoryReturnPosition(params)
    ctx.body = {
        ...res
    }
})
// 获取还车点限制信息
CarInfoRouter.post('/getLimit', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getLimit(params)
    ctx.body = {
        ...res
    }
})

export default CarInfoRouter
