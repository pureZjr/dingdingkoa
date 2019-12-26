import qiniu, { conf } from 'qiniu'
import jwt from 'jwt-simple'
import log4js from 'log4js'

import config from '@config/index'
import DB from '@mongodb/db'
import { CollectionName } from '@constant/index'

const { AK, SK, bucket } = config.qiniu

export function delay(delay: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, delay || 100)
    })
}

// 七牛配置
export function qiniuConfig() {
    const config: conf.ConfigOptions = new qiniu.conf.Config()
    // 空间对应的机房
    config.zone = qiniu.zone.Zone_z2
    return config
}
// 上传文件
export function qiniuUpload(args: {
    filePath: string
    prefix: string
    filename: string
}): any {
    return new Promise((resolve, reject) => {
        const mac = new qiniu.auth.digest.Mac(AK, SK)
        const options = {
            scope: `${bucket}`,
            // fsizeMin: 0
        }
        const putPolicy = new qiniu.rs.PutPolicy(options)
        const uploadToken = putPolicy.uploadToken(mac)
        const localFile = args.filePath
        const config = qiniuConfig()
        const formUploader = new qiniu.form_up.FormUploader(config)
        const putExtra = new qiniu.form_up.PutExtra()
        // 文件上传
        formUploader.putFile(
            uploadToken,
            null,
            localFile,
            putExtra,
            (respErr, respBody, respInfo) => {
                if (respErr) {
                    throw respErr
                }
                if (respInfo.statusCode == 200) {
                    resolve({
                        key: respBody.key,
                        type: 'success',
                    })
                } else {
                    reject({ type: 'err', msg: respBody })
                }
            }
        )
    })
}
// 创建后台管理的token
export function createToken(data: { password: string; phone: string }) {
    const token = jwt.encode(
        {
            iss: {
                ...data,
                password: data.password,
            },
        },
        config.TOKEN_SECERT
    )
    return token
}
// 打印日志
export function printLog(msg: string, level: string) {
    const log = log4js.getLogger()
    log[level](msg)
}
// 根据token获取手机号码
export async function getPhoneByToken(token: string) {
    const decoded = jwt.decode(token, config.TOKEN_SECERT)
    return decoded.iss.phone
}
// 根据token获取叮叮token
export async function getDdTokenByToken(token: string) {
    const decoded = jwt.decode(token, config.TOKEN_SECERT)
    const res = await DB.find(CollectionName.ddTokenPhoneMap, {
        phone: decoded.iss.phone,
    })
    return res[0].token
}
// 检查token合法性
export async function checkToken(token: string) {
    const decoded = jwt.decode(token, config.TOKEN_SECERT)
    const { phone, password } = decoded.iss
    const record = await DB.find(CollectionName.users, { phone, password })
    return !!record.length
}
