const express = require('express')

const app = express()

const { PORT = 3000 } = process.env

app.use(express.static('public'))

app.get('/header', (req, res) => {
  res.json(req.headers)
})

app.get('/header/:name', (req, res) => {
  res.json(req.header(req.params.name))
})

console.log(`Listening on http://0.0.0.0:${PORT}`)
app.listen(PORT)
