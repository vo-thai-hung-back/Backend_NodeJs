const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine

app.set('views', path.join(__dirname, 'views'))
app.set('views engine', 'ejs')

//config static files


app.use(express.static(path.join(__dirname, 'public')));

// khai báo route

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/ABC', (req, res) => {
    res.send('sample.ejs')
})

app.get('/hung', (req, res) => {
    res.render('sample.ejs')
})

app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})