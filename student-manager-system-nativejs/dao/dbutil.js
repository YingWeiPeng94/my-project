var mysql = require("mysql")
module.exports = function () {
    return mysql.createConnection({
        host:"127.0.0.1",
        port:"3306",
        user:"root",
        password:"YING65123478",
        database:"studentinfomanager"
    })
}