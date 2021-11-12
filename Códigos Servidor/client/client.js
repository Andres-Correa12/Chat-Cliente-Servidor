const net = require('net');
const readline = require('readline-sync');
const servidor={
    port:3000,
    host:'localhost',
}

const client = net.createConnection(servidor);

client.on('connect', ()=>{
    console.log('Conexión satisfactoria')
    sendline()
})
client.on('data',(data)=>{
    console.log('El servidor dice: '+ data)
    if (data != "Hasta luego")
    {
        sendline()
    }
})
client.on('error',(err)=>{
    console.log(err.message)
})
function sendline(){
    var line = readline.question('\n Ingresa un mensaje \n')
    if (line == 0){
        client.end()
    }else{
        client.write(line)
    }
}