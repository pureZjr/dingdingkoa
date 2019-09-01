import mongodb from 'mongodb'

import config from '@config/index'

const MongoClient = mongodb.MongoClient

class Db {
    // 单例
    static getInstance(): {
        add: (collectionName: string, json) => Promise<any>
        delete: (collectionName: string, json) => Promise<any>
        find: (collectionName: string, json?) => Promise<any>
        updateOne: (collectionName: string, json, newJson) => Promise<any>
        insert: (collectionName: string, json) => Promise<any>
        insertMany: (collectionName: string, json) => Promise<any>
    } {
        if (!Db['instance']) {
            Db['instance'] = new Db()
        }
        return Db['instance']
    }

    constructor() {
        this.dbClient = null
    }

    dbClient

    connect(): Promise<mongodb.Db> {
        return new Promise((resolve, reject) => {
            if (!this.dbClient) {
                MongoClient.connect(config.bd.dbUrl, (err, client) => {
                    if (err) {
                        reject(err)
                    } else {
                        const db = client.db(config.bd.dbName)
                        console.log('数据库连接成功！！！')
                        this.dbClient = db
                        resolve(this.dbClient)
                    }
                })
            } else {
                resolve(this.dbClient)
            }
        })
    }
    //增
    add(collectionName: string, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db: mongodb.Db) => {
                db.collection(collectionName).insertOne(json, (err, { result }) => {
                    if (result.ok === 1) {
                        resolve({ status: 'success' })
                    } else {
                        reject(err)
                    }
                })
            })
        })
    }
    // 删
    delete(collectionName: string, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db: mongodb.Db) => {
                db.collection(collectionName).deleteOne(json, (err, { result }) => {
                    if (result.ok === 1) {
                        resolve({ status: 'success' })
                    } else {
                        reject(err)
                    }
                })
            })
        })
    }
    // 查
    find(collectionName: string, json = {}) {
        return new Promise((resolve, reject) => {
            this.connect().then((db: mongodb.Db) => {
                const res = db.collection(collectionName).find(json)
                res.toArray((err, docs) => {
                    if (err) {
                        reject(err)
                        return
                    } else {
                        resolve(docs)
                    }
                })
            })
        })
    }
    // 改
    updateOne(collectionName: string, json, newJson) {
        return new Promise((resolve, reject) => {
            this.connect().then((db: mongodb.Db) => {
                db.collection(collectionName)
                    .updateOne(json, { $set: newJson })
                    .then(({ result }) => {
                        if (result.ok === 1) {
                            resolve({ status: 'success' })
                        } else {
                            reject(result)
                        }
                    })
            })
        })
    }
    // 插入
    insert(collectionName: string, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db: mongodb.Db) => {
                db.collection(collectionName)
                    .insertOne(json)
                    .then(({ result }) => {
                        if (result.ok === 1) {
                            resolve({ status: 'success' })
                        } else {
                            reject(result)
                        }
                    })
            })
        })
    }
    // 插入多条
    insertMany(collectionName: string, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db: mongodb.Db) => {
                db.collection(collectionName)
                    .insertMany(json)
                    .then(({ result }) => {
                        if (result.ok === 1) {
                            resolve({ status: 'success' })
                        } else {
                            reject(result)
                        }
                    })
            })
        })
    }
}

export default Db.getInstance()
