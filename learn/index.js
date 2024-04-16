const express = require('express')
const bodyParser = require('body-parser')
const db = require('./connection')
const respon = require('./respon')
const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
  db.query("SELECT * FROM post", (e, result) => {
    respon(200, result, "sukses", res)
  })
  
})

app.get('/find', (req, res) => {
  const param = `${req.query.category}`
  const sql = `SELECT * FROM post WHERE category = '${param}'`
  db.query(sql, (e, result) => {
    respon(200, result, "sukses", res)
  })
})

app.get('/param', (req,res) => {
  console.log({urlParam: req.query})
  res.send('test param')
})

app.post('/post', (req, res) => {
  console.log({requestBody: req.body})
  res.send('post')
})

app.put('/put', (req, res) => {
  console.log({reqPutBody: req.body})
  res.send('put')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})