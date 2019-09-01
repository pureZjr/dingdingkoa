import { post } from '@utils/http'
// 获取附件网点信息
export const getAround = data => {
    return post('station/getAround.json', data)
}
// 获取站点车辆
export const getStationCar = data => {
    return post('v1/vehicle/queryStationVehicles.json', data)
}
// 历史还车点
export const getHistoryReturnPosition = data => {
    return post('order/getHistoryPark.json', data)
}
// 获取还车点限制信息
export const getLimit = data => {
    return post('station/v2/getLimit.json', data)
}
