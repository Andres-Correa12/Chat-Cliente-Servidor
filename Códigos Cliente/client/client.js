const net = require('net');
const readline = require('readline-sync');
const sevidor={
    port:3000,
    host:'192.168.43.177'
}
const client = net.createConnection(sevidor);
client.on('connect',()=>{
    console.log('Conexion satisfactoria')
    sendLine()
})
    client.on('data', (data)=>{
        console.log('El servidor dice:' + data)
    if (data != 'Hasta pronto.')
    { 
        sendLine()
    }
})
client.on('error',(err)=>{
    console.log(err.message)
})
function sendLine(){
    var line = readline.question('\n ingresa un mensaje \n ')
    if(line==0){
        client.end()
    }else{
        client.write(line)
    }
}