import Server, { Socket } from 'socket.io'

import handleReceiveMsg from './handleReceiveMsg'

const io = Server()

io.on('connection', (client: Socket) => {
    console.log('connected !!!')
    handleReceiveMsg(client)
})

io.listen(2333)

global['io'] = io
