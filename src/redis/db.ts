import redis from 'redis'

import config from '@config/index'

class Redis {
    // 单例
    static getInstance(): {
        set: (key: string, value: string, timeout: number) => Promise<string>
        get: (key: string) => Promise<string>
    } {
        if (!Redis['instance']) {
            Redis['instance'] = new Redis()
        }
        return Redis['instance']
    }
    constructor() {
        this.RedisClient = null
    }

    RedisClient

    connect(): Promise<redis.RedisClient> {
        return new Promise((resolve, reject) => {
            try {
                if (!this.RedisClient) {
                    this.RedisClient = redis.createClient(config.redis.port, config.redis.host)
                    resolve(this.RedisClient)
                } else {
                    resolve(this.RedisClient)
                }
                console.log('redis连接成功！！！')
            } catch {
                console.log('redis连接失败！！！')
                reject(new Error('err'))
            }
        })
    }
    set(key: string, value: string, timeout: number) {
        return new Promise((resolve, reject) => {
            this.connect().then((client: redis.RedisClient) => {
                try {
                    if (timeout) {
                        client.set(key, value, 'EX', timeout)
                    } else {
                        client.set(key, value)
                    }
                    resolve('success')
                } catch {
                    resolve('err')
                }
            })
        })
    }
    get(key: string) {
        return new Promise((resolve, reject) => {
            this.connect().then((client: redis.RedisClient) => {
                try {
                    client.get(key, (err, value) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(value)
                        }
                    })
                } catch {
                    resolve('err')
                }
            })
        })
    }
}
export default Redis.getInstance()
