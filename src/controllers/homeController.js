const { json } = require('express');
const connection = require('../config/database')
const { getAllUsers, getUserByID, updateUserById } = require('../services/CRUDService')


const getHomepage = async (req, res) => {



    //console.log("kiem tra du lieu : ", results);

    let results = await getAllUsers();

    return res.render('homepage.ejs', { listUsers: results });

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
//viết dưới dạng async
const postCreateUser = async (req, res) => {

    // lấy dữ liệu người dùng 
    // 3 dòng đầu tiên là cách lấy dữ liệu bình thường
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    // dòng dưới lấy dữ liệu gọn hơn 3 dòng trên
    //let {email , name , city} = req.body;

    // dòng dưới coi liệu của mình có đúng giá trị mà đã nhập ko
    //console.log("email= ", email, "name = ", name, " city =", city)

    // dòng dưới giúp hiển thị dữ liệu , coi thử dữ liệu có nhận ko
    //console.log("ta co :", req.body)

    // dòng dưới đừng quan tâm
    //res.send('create users')

    // những dòng dưới là đưa dữ liệu vào database
    // ? ? ? là code của tk mysql2
    // connection.query(
    //     `INSERT INTO
    //     Users (email,name,city)
    //     VALUES (?,?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Created user success')
    //     }
    // )

    // viết dưới dạng async await
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email,name,city) VALUES (?,?,?) `, [email, name, city]
    );

    res.send('Created user success');

}


const getCreatePage = (req, res) => {

    return res.render('create.ejs');

}

const getUpdatePage = async (req, res) => {
    const userId = await req.params.id;
    //console.log("aad", userId)

    let user = await getUserByID(userId);
    //console.log("req.params : ", user)


    //console.log("bien ", user)
    //console.log("req.params : ", req.params.id)
    return res.render('edit.ejs', { usersEdit: user });

}

const postUpdateUser = async (req, res) => {

    // lấy dữ liệu người dùng 
    // 3 dòng đầu tiên là cách lấy dữ liệu bình thường
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    let userId = req.body.userId;

    // dòng dưới lấy dữ liệu gọn hơn 3 dòng trên
    //let {email , name , city} = req.body;

    // dòng dưới coi liệu của mình có đúng giá trị mà đã nhập ko
    //console.log("email= ", email, "name = ", name, " city =", city, "id =", userId)

    // dòng dưới giúp hiển thị dữ liệu , coi thử dữ liệu có nhận ko
    //console.log("ta co :", req.body)

    // dòng dưới đừng quan tâm
    //res.send('create users')

    // những dòng dưới là đưa dữ liệu vào database
    // ? ? ? là code của tk mysql2
    // connection.query(
    //     `INSERT INTO
    //     Users (email,name,city)
    //     VALUES (?,?,?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send('Created user success')
    //     }
    // )

    // viết dưới dạng async await
    await updateUserById(email, name, city, userId);

    //res.send('Update user success');
    res.redirect('/');

}

module.exports = {
    getHomepage,
    getImg,
    getHomepage2,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser
}
