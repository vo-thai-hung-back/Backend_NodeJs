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

module.exports = {
    getAllUsers,
    getUserByID
}