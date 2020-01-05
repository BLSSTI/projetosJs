const _ = require('lodash')
    //setInterval(() => console.log(_.random(1, 100)), 2000)

//tentar implementar juntamente a uma senha
const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)