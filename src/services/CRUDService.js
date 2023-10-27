const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
};

const getUserByID = async (userId) => {
    let [results, fields] = await connection.query('select * from Users where id = ?', [userId]);
    //console.log(results);
    let user = results && results.length > 0 ? results[0] : {};
    //console.log(user);
    return user;
};


updateUserById = async (email, name, city, userId) => {
    let [results, fields] = await connection.query(
        `UPDATE Users 
        SET email = ?, name= ? ,city = ?
        WHERE id  = ?
        `
        , [email, name, city, userId]
    );

}
module.exports = {
    getAllUsers,
    getUserByID,
    updateUserById
}