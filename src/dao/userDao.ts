import DB from '@mongodb/db'
import { CollectionName } from '@constant/index'

export default class userDao {
    // 新增用户
    add = async data => {
        const res = await DB.add(CollectionName.users, data)
        return res
    }
    // 删除用户
    delete = async data => {
        const res = await DB.delete(CollectionName.users, data)
        return res
    }
    // 修改用户：TODO
    // 查询用户
    find = async data => {
        const res: any = await DB.find(CollectionName.users, data)
        return res
    }
}
