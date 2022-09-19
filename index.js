const express = require('express')
const app = express()
const test = require('./test.json')

app.get('/', function (req, res) {
  res.sendFile(`${__dirname}/html/index.html`)
})

app.get('/users', function (req, res) {
  res.sendFile(__dirname)
})

app.get('/user/:name/:id', function (req, res) {
  res.send(
    `<p style="color: blue">user is ${req.params.name}</p> <p>user id is ${req.params.id}</p>`
  )
})

app.listen(3100, function () {
  console.log('Server is running')
})
