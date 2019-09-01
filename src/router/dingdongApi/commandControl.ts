// 指令控制

import Router from 'koa-router'

import { sendControlCode, returnCar, changeReturnStation } from '@service/api/controlCar'

const CommandControlRouter = new Router()

// 发送指令 3：寻车，2：锁车，5： 取消
CommandControlRouter.post('/controlCar', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await sendControlCode(params)
    ctx.body = {
        ...res
    }
})
CommandControlRouter.post('/returnCar', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await returnCar(params)
    ctx.body = {
        ...res
    }
})
CommandControlRouter.post('/changeReturnStation', async (ctx, next) => {
    const data = ctx.request.body
    const params = {
        ...data,
        lang: 'cn'
    }
    const res = await changeReturnStation(params)
    ctx.body = {
        ...res
    }
})

export default CommandControlRouter
