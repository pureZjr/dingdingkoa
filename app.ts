import Koa from 'koa'
import koaBodyParse from 'koa-bodyparser'
import cors from 'koa-cors'
import router from 'koa-router'

import { tokenVerify, log } from './src/middleware'
import '@service/socket/index'

import UserInfoRouter from '@router/customApi/usersInfo'
import HistoryoRouter from '@router/customApi/history'
import Users from '@router/customApi/usersAccount'
import CarRouter from '@router/customApi/cars'

import DingdoingUserRouter from '@router/dingdongApi/users'
import DingdoingOrderInformationRouter from '@router/dingdongApi/orderInformation'
import DingdoingCarsInfoRouter from '@router/dingdongApi/carsInfo'
import DingdoingCommandControlRouter from '@router/dingdongApi/commandControl'

const allRouter = new router()
const app = new Koa()

app.use(cors())
app.use(koaBodyParse())

// token验证
app.use(tokenVerify)

/**
 * 本地接口
 */
// users
allRouter.use('/users', Users.routes())
// 用户信息
allRouter.use('/userInfo', UserInfoRouter.routes())
// 历史订单
allRouter.use('/history', HistoryoRouter.routes())
// 车辆
allRouter.use('/cars', CarRouter.routes())

/**
 *  叮咚接口
 */
// 用户信息
allRouter.use('/dd/user', DingdoingUserRouter.routes())
// 订单信息
allRouter.use('/dd/orderInfo', DingdoingOrderInformationRouter.routes())
// 车辆信息
allRouter.use('/dd/carsInfo', DingdoingCarsInfoRouter.routes())
// 指令控制
allRouter.use('/dd/CmdCtrl', DingdoingCommandControlRouter.routes())

app.use(allRouter.routes()).use(allRouter.allowedMethods())

// 日志
app.use(log)

// 给EventEmitter添加最大监听器
var EventEmitter = require('events').EventEmitter
var ee = new EventEmitter()
ee.setMaxListeners(15)

app.listen(3000)
