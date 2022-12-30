
//"net" provides a way of creating TCP servers and TCP clients.
const net = require('net');

const port = 3000;
const host = 'localhost';

const socket = net.connect(port, host);

socket.on('data',(data)=>{
    console.log(data.toString());
})