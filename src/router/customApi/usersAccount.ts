import Router from 'koa-router'
import md5 from 'md5'
import { isNull } from 'lodash'
import SocketIO from 'socket.io'
import uuidV1 from 'uuid'

import userDao from '@dao/userDao'
import Redis from '@redis/db'
import DB from '@mongodb/db'
import { createToken, getPhoneByToken } from '@utils/commons'
import synchronization from '@utils/synchronization'
import { CollectionName } from '@constant/index'
import { loginOnApp, loginFromGongZongHao } from '@service/api/usersApi'
import config from '@config/index'

const UsersAccountRouter = new Router()
const UserDao = new userDao()

// 注册-后台管理平台注册接口
UsersAccountRouter.post('/', async (ctx, next) => {
    const data = ctx.request.body
    if (!data.name || !data.password || !data.phone) {
        ctx.body = { message: '参数有误' }
        ctx.status = 400
    } else {
        // 判断用户是否存在
        const isExisted = !!(await UserDao.find({ phone: data.phone })).length
        if (isExisted) {
            ctx.body = { status: 0, message: '该手机号码已经存在，请直接登录' }
        } else {
            const res = await UserDao.add({ ...data, password: md5(data.password) })
            ctx.body = { status: 1, data: res }
        }
    }
    await next()
})
//ToDo 删除
UsersAccountRouter.post('/delete', async (ctx, next) => {
    UserDao.delete({
        name: '123',
        password: '123'
    })
    ctx.body = 'ok'
    await next()
})
// 根据手机号码查找用户信息
UsersAccountRouter.get('/find', async (ctx, next) => {
    const data = ctx.request.body
    if (!data.phone) {
        ctx.body = { err: '参数有误' }
        ctx.status = 400
    } else {
        const res = await UserDao.find({
            ...data
        })
        ctx.body = res
    }
    await next()
})
// 登录后台管理平台
UsersAccountRouter.post('/login', async (ctx, next) => {
    const data = ctx.request.body
    if (!data.phone || !data.password) {
        ctx.body = { status: 0, message: '参数有误' }
        ctx.status = 400
    } else {
        // 判断账号密码是否一致
        const record = await UserDao.find({
            ...data,
            password: md5(data.password)
        })
        if (!!record.length) {
            const token = createToken({
                phone: data.phone,
                password: md5(data.password)
            })
            // 根据手机号码获取叮叮的token
            const dd = await DB.find(CollectionName.ddTokenPhoneMap, { phone: data.phone })
            // 执行同步数据操作
            synchronization(dd[0].token, data.phone)
            ctx.body = { status: 1, data: { token } }
        } else {
            ctx.body = { status: 0, message: '账号或密码错误' }
        }
    }
    await next()
})
// 二维码登录，用户首次登陆后台管理平台必须扫码登录，不提供用户注册
UsersAccountRouter.post('/qrcode/login', async (ctx, next) => {
    const data = ctx.request.body
    const io: SocketIO.Server = global['io']
    if (!data.uuid || !data.phone) {
        ctx.body = { status: 0, message: '参数有误' }
        ctx.status = 400
    } else {
        const socketId = await Redis.get(data.uuid)
        if (isNull(socketId)) {
            ctx.body = {
                status: 0,
                data: {
                    message: '二维码已经过期，请重新获取'
                }
            }
        } else {
            // 根据电话号码查找密码，没有的话只返回电话号码
            const record = await DB.find(CollectionName.users, {
                phone: data.phone
            })
            if (!!record) {
                const token = createToken({
                    phone: data.phone,
                    password: record[0].password
                })
                io.sockets.to(socketId).emit('qrcode-userMsg', { token })
            } else {
                io.sockets.to(socketId).emit('qrcode-userMsg', { phone: data.phone })
            }
            ctx.body = {
                status: 1,
                data: {
                    message: '扫码成功'
                }
            }
        }
    }
})
// 存手机号码跟叮叮token的对应关系
UsersAccountRouter.post('/ddToken/:type', async (ctx, next) => {
    const type = ctx.params.type
    const data = ctx.request.body
    if (type === 'add') {
        await DB.insert(CollectionName.ddTokenPhoneMap, { ...data })
    } else {
        const res = await DB.find(CollectionName.ddTokenPhoneMap, { phone: data.phone })
        if (!res) {
            await DB.insert(CollectionName.ddTokenPhoneMap, { ...data })
        } else {
            await DB.updateOne(CollectionName.ddTokenPhoneMap, { phone: data.phone }, { token: data.token })
        }
    }
    ctx.body = 'success'
    await next()
})
// 获取叮叮token
UsersAccountRouter.get('/ddToken', async (ctx, next) => {
    const data = ctx.request.query
    const phone = await getPhoneByToken(data.token)
    const res = await DB.find(CollectionName.ddTokenPhoneMap, { phone })
    ctx.body = {
        status: 1,
        data: { token: res[0].token }
    }
})
// 小程序登录,首次登录，用短信登录
UsersAccountRouter.post('/appletLogin', async (ctx, next) => {
    const data = ctx.request.body
    const deviceid = uuidV1()
    const params = {
        ...data,
        ...config.loginArgs,
        deviceid
    }
    const res = await loginOnApp(params)
    let token
    try {
        if (res.status === 1) {
            const record = await DB.find(CollectionName.ddTokenPhoneMap, { phone: data.phone })
            if (!record.length) {
                await DB.insert(CollectionName.ddTokenPhoneMap, { phone: data.phone, token: res.data.token })
            } else {
                // 跟新token和phone的对应关系
                await DB.updateOne(
                    CollectionName.ddTokenPhoneMap,
                    { phone: data.phone },
                    { token: res.data.token, deviceid }
                )
            }
            const userRecord = await DB.find(CollectionName.users, { phone: data.phone })
            if (!userRecord.length) {
                // 自动创建用户密码供后台登录
                await DB.insert(CollectionName.users, {
                    name: 'user',
                    password: md5(data.phone),
                    phone: data.phone
                })
            }
            token = createToken({
                phone: data.phone,
                password: md5(data.phone)
            })
            // 同步数据
            await synchronization(res.data.token, data.phone)
        }
        ctx.body = {
            data: { token },
            status: 1
        }
    } catch {
        ctx.body = {
            data: { ...res },
            status: 2
        }
    }
})
// 一键登录
UsersAccountRouter.post('/fast-login', async (ctx, next) => {
    const data = ctx.request.body
    if (!data.phone) {
        ctx.body = { message: '参数有误' }
        ctx.status = 400
    } else {
        const record = await DB.find(CollectionName.users, { phone: data.phone })
        // 存在记录
        if (!!record.length) {
            const token = createToken({
                phone: record[0].phone,
                password: record[0].password
            })
            ctx.body = {
                data: { token },
                status: 1
            }
        } else {
            ctx.body = {
                data: { token: '' },
                status: 0
            }
        }
    }
})
// 微信公众号登录接口
UsersAccountRouter.post('/login-from-gongZongHao', async (ctx, next) => {
    const data = ctx.request.body
    const res = await loginFromGongZongHao(data)
    if (res.status === 1) {
        ctx.body = {
            data: { token: res.data.token },
            status: 0
        }
    } else {
        ctx.body = {
            data: { token: '' },
            status: 0
        }
    }
})

export default UsersAccountRouter
