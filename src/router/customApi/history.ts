import Router from 'koa-router'

// import DB from '@mongodb/db'
// import { getHistoryOrder } from '@service/api/usersApi'

const HistoryRouter = new Router()

// HistoryRouter.get('/order', async (ctx, next) => {
//     let res = await DB.find('orderHistory')
//     // 没查询到历史订单，就查询叮咚接口
//     if (!res.length) {
//         const list = await getHistoryOrder({
//             pageNo: 1,
//             pageSize: 100000,
//             ...ctx.query
//         })
//         DB.insertMany('orderHistory', list.data)
//         ctx.body = list.data
//     } else {
//         ctx.body = res
//     }
//     await next()
// })

// // 统计每辆车开了多少次
// HistoryRouter.get('/summaryCarNum/:type', async (ctx, next) => {
//     let obj = {}
//     let arr: any[] = []
//     const isArray = ctx.params.type === 'arr'
//     function summaryCarNum(item) {
//         if (!!obj[item.carNum]) {
//             obj[item.carNum].push(item)
//         } else {
//             obj[item.carNum] = [item]
//         }
//     }
//     let res
//     if (isArray) {
//         res = await DB.find('CarNumInfoArr')
//     } else {
//         res = await DB.find('CarNumInfoObj')
//     }
//     // 没查询到历史订单，就查询叮咚接口
//     if (!res.length) {
//         const list = await getHistoryOrder({
//             pageNo: 1,
//             pageSize: 100000,
//             ...ctx.query
//         })
//         list.data.forEach(v => {
//             summaryCarNum(v)
//         })
//         if (isArray) {
//             for (let carNum in obj) {
//                 arr.push({ carNum: obj[carNum] })
//             }
//             DB.insertMany('CarNumInfoArr', arr)
//         } else {
//             DB.insert('CarNumInfoObj', { data: obj })
//         }
//     } else {
//         if (isArray) {
//             obj = res
//         } else {
//             obj = res
//         }
//     }
//     ctx.body = isArray ? arr : obj
//     await next()
// })

export default HistoryRouter
