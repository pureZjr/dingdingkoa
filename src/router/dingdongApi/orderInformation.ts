// 订单信息
import Router from 'koa-router'

import { getInfo } from '@service/api/afterBookCar'

const OrderInfoRouter = new Router()

OrderInfoRouter.post('/getCarInfo', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await getInfo(params)
    ctx.body = {
        ...res
    }
})

export default OrderInfoRouter
