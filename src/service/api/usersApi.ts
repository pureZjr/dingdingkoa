import { post, download } from '@utils/http'

// app登录接口
export const loginOnApp = data => {
    return post('cust/login.json', data)
}
// 获取验证码
export const getVerify = data => {
    return post('verify/validateAndSendMsg.json', data)
}
// 获取验证码图片
export const getImageVerifyCode = data => {
    return download('verify/imageVerifyCode.json', data)
}
// 获取用户信息
export const getCustomerInfo = data => {
    return post('center/customerInfo.json', data)
}
// 获取余额
export const getAccount = data => {
    return post('cust/getAccount.json', data)
}
// 查询历史租车情况
export const getHistoryOrder = data => {
    return post('order/queryOrders.json', data)
}
// 获取历史租车包含价格
export const getHistoryOrderCost = data => {
    return post('invoice/validInvoiceOrder.json', data)
}
// 微信公众号登录接口
export const loginFromGongZongHao = data => {
    return post('cust/wxLogin.json', data)
}
