const http = require('http');
const petshop = require('./petshop');

const server = http.createServer((req, res) =>  {

    if (req.url == "/listarpets") {
        let resultado = petshop.getPets();
        return res.end(resultado);
    }
    res.setHeader("Content-Type", "text/html;charset=utf8");
    res.write("Você está dentro do sistema Petshow");
    res.end();
})

server.listen(3030, 'localhost', () => {
    console.log('Servidor ON');
})