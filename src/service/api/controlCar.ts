import { post } from '@utils/http'

// 操作车辆
export const sendControlCode = data => {
    return post('vehicle/v2/sendControlCode.json', data)
}
// 还车
export const returnCar = data => {
    return post('order/checkReturnCar.do', data)
}
// 改变还车点
export const changeReturnStation = data => {
    return post('order/v1/changeReturnStation.json', data)
}
