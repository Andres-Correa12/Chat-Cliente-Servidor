const net = require ('net');
//const { Stream } = require('stream');
const server = net.createServer();

server.on('connection',(socket)=>{
    socket.on('data',(data)=>{
        console.log('Mensaje recibido desde el cliente:' + data)
        if (data=='hola') {
        socket.write('Holaaaa\n')
        }
        if (data=='como esta?') {
        socket.write('Bien, Gracias\n')
        }
        if (data=='dia?') {
            let fecha = new Date();
            let output = String(fecha.getDate()).padStart (2,'0')+'/'+String(fecha.getMonth()).padStart(2,0)+'/'+fecha.getFullYear();
            socket.write('Fecha:'+output);
            }
            if(data=='hora?')
            {
                let fecha = new Date();
                let output =String(fecha.getHours()).padStart (2,'0')+':'+String(fecha.getMinutes()).padStart(2,0)+':'+fecha.getSeconds();
                socket.write('Hora:'+output);
            }
            if(data=='Adios')
            {
            socket.write('Hasta pronto.')
           }
    socket.on('close',()=>{
        console.log('Comunicacion finalizada')
    })
    socket.on('error',(err)=>{
        console.log(err.message)
    })
    })
})
server.listen(3000, ()=>{
    console.log('Servidor funcionando en el puerto:', server.address().port)
})