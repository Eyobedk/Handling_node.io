const net = require("net");

const host =  'localhost';
const port = 3000;

//create a TCP server
net.createServer((socket)=>{
    console.log("client connnected");
    
    //emit a message to clinet
    socket.emit('event', function first(){
        console.log('here')
    })
}).listen(port, host);