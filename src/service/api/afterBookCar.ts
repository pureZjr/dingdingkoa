import { post } from '@utils/http'
// 租车信息
export const getInfo = data => {
    return post('order/getInfo.json', data)
}
