export interface PositionInfo {
  id: number
  area: string // 区
  name: string // 网点名
  location: string // 网点位置
  lon: number // 经度
  lat: number // 纬度
  districtName: string // 所在区域
  limitSign: string // 未知 等于1的话网点不能用
  district: string // 所在区域代号
}

export interface AreaStationsInfo extends PositionInfo {
  distance: number // 网点到你未知的距离 :米
  availablePort: number // 剩余车位
  vehicleReminderStatus: string // 未知
  apptFlag: string // 未知
  availableVehicle: number // 剩余车数
  actStation: number // 未知
}

export interface CustomStationInfo extends PositionInfo {
  status: string // 状态
}
