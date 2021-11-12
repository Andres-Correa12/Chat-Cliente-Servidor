const net = require ('net');
const readline = require('readline-sync');
const server = net.createServer();

//se enciende el servidor
server.on('connection', (Socket)=> {
    Socket.on('data',(data)=>{
        console.log('Mensaje recibido desde el cliente:' + data)
        sendLine()
        
        function sendLine(){
            var line = readline.question('\n ingresa un mensaje \n')
            if(line == 0){
                Socket.end()
            }else{
                Socket.write(line)
            }
        }
    })

    //se cierra la comunicación
    Socket.on('error',(err)=>{
        console.log(err.message)
    })
})

server.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto ', server.address().port)
})