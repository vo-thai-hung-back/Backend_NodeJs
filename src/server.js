const express = require('express')
require('dotenv').config()
const configViewEngine = require('./config/viewEngine')
const webRouters = require('./routes/web')
const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

// config template engine

configViewEngine(app);

// khai báo route
app.use('/', webRouters);


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})