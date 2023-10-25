const { json } = require('express');
const connection = require('../config/database')



const getHomepage = (req, res) => {

    return res.render('homepage.ejs');

}


const getHomepage2 = (req, res) => {

    let users = [];
    connection.query(
        'select * from Users u ',
        function (err, results, fields) {
            users = results;
            console.log(results);
            //console.log(fields);
            console.log('check : ', users);
            res.send(JSON.stringify(users))

            // muốn xuất view là đoạn dưới
            //res.render('sample.ejs');
        }
    );

}
const getImg = (req, res) => {
    res.send('sample.ejs')
}

module.exports = {
    getHomepage,
    getImg,
    getHomepage2
}