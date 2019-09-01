export interface CarInfo {
  id: string
  typeId: string
  color: string
  typeIco: string
  carNumber: string // 车牌号
  seat: number // 座位数
  power: number // 电量
  brand: string // 品牌
  typeName: string // 车型
  cruisingDistance: number // 当前续航距离
}

export interface Price {
  insurance: number // 保险费
  dailyPrice: number // 日租价格
  rentDays?: number // 未知
  distanceUnitPrice: number // 元/公里
  durationUnitPrice: number // 元/分钟
}
