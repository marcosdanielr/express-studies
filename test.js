var http = require('http')

http
  .createServer(function (req, res) {
    res.end('Opa')
  })
  .listen('8081')

console.log('Server is running')
