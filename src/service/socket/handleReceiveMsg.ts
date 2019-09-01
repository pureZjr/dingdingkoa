import { Socket } from 'socket.io'
import qr from 'qr-image'

import Redis from '@redis/db'

function handleReceiveMsg(client: Socket) {
    // 请求二维码
    client.on('get-qrcode', async data => {
        // 缓存socketid和对应的uuid
        const status = await Redis.set(data.uuid, client.id, 60)
        const svg_string = qr.imageSync(data.uuid, { type: 'svg' })
        if (status === 'success') {
            client.emit('qrcode', {
                svg_string
            })
        } else {
            client.emit('qrcode', {
                message: '二维码生成失败'
            })
        }
    })

    client.on('disconnect', () => {
        console.log(client.id + 'is disconnected !!!')
    })
}

export default handleReceiveMsg
