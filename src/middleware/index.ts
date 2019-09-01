// import jwt from 'jwt-simple'
import log4js from 'log4js'

// import { TOKEN_SECERT, CollectionName } from '@constant/index'
// import DB from '@mongodb/db'
import { printLog, checkToken } from '@utils/commons'

// 不需要校验token的接口，一般是后台管理的登录、注册接口或叮叮的接口
// 后台密码登录：/users/login
// 后台扫码登录：/users/qrcode/login
// 小程序端登录：/users/appletLogin
// 小程序一键登录：/users/fast-login
// 小程序获取附近车辆接口：/cars/around
// 微信公众号登录接口 /users/login-from-gongZongHao
const noVerifyUrl = [
    '/users/login',
    '/users/qrcode/login',
    '/users/appletLogin',
    '/users/fast-login',
    '/cars/around',
    '/users/login-from-gongZongHao'
]
// 叮叮的接口
const isDdApi = (pathname: string) => pathname.indexOf('/dd') >= 0

export const tokenVerify = async (ctx, next) => {
    let data = ctx.request.body
    if (ctx.request.method === 'GET') {
        data = ctx.request.query
    }
    const noToken = !data.token
    if (noToken && !noVerifyUrl.includes(ctx.request.URL.pathname) && !isDdApi(ctx.request.URL.pathname)) {
        ctx.body = { err: '没权限，请登录', status: 2 }
        ctx.status = 401
    } else if (noVerifyUrl.includes(ctx.request.URL.pathname) || isDdApi(ctx.request.URL.pathname)) {
        await next()
    } else {
        if (checkToken(data.token)) {
            await next()
        } else {
            ctx.body = { err: '没权限，请登录', status: 2 }
            ctx.status = 401
        }
    }
}
export const log = async (ctx, next) => {
    const { request, response } = ctx
    // 创建该用户的日志文件
    log4js.configure({
        appenders: {
            info: { type: 'file', filename: `logger/service.log` }
        },
        categories: { default: { appenders: ['info'], level: 'debug' } }
    })
    printLog(
        JSON.stringify({
            request: {
                url: request.url,
                method: request.method
            },
            response: {
                status: response.status,
                message: response.message
            }
        }),
        'info'
    )
    next()
}
