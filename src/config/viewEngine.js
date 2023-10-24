const path = require('path');
const express = require('express');
const configViewEngine = (app) => {
    app.set('views', path.join('./src', 'views'))
    app.set('views engine', 'ejs');
    //config static files : để upload được những file css/img/js
    app.use(express.static(path.join('./src', 'public')));
};
module.exports = configViewEngine;
