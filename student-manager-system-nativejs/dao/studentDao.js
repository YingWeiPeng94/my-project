var createConnection = require("./dbutil");

function queryAllstudent(success) {
    var connection = createConnection()
    connection.connect()
    var sql = "select * from studentinfo"
    connection.query(sql, function (err, res) {
        if (err == null) {
            success(res)
        } else {
            console.log(err)
        }
    })
    connection.end()
}

function insertStudent(studentObj, success) {
    // 增加学生
    var connection = createConnection();
    connection.connect()
    var sql = "insert into studentinfo(`name`,`number`,`birth`,`address`,`sex`,`phone`,`email`) values(?,?,?,?,?,?,?)"

    var name = studentObj.name,
        number = studentObj.number,
        birth = studentObj.birth,
        address = studentObj.address,
        sex = studentObj.sex,
        phone = studentObj.phone,
        email = studentObj.email;
    var params = [name, number, birth, address, sex, phone, email]
    connection.query(sql, params, function (error, result) {
        if (error == null) {
            success("OK")
        } else {
            console.log(error)
        }
    })
    connection.end()
}

function deleteStudentBynumber(number, success) {
    var connection = createConnection();
    connection.connect();
    var sql = "delete from studentinfo where `number` = ?";
    var params = [number];
    connection.query(sql, params, function (error, result) {
        if (error == null) {
            success("OK")
        } else {
            console.log(error)
        }
    })
    connection.end();
}

function modifyStudentById(studentObj, success) {
    var name = studentObj.name,
        number = studentObj.number,
        birth = studentObj.birth,
        address = studentObj.address,
        sex = studentObj.sex,
        phone = studentObj.phone,
        email = studentObj.email;
    var params = [name, birth, address, sex, phone, email, number]
    var connection = createConnection();
    connection.connect()
    var sql = "update studentinfo set `name`=?, `birth`=?, `address`=?, `sex`=?, `phone`=?, `email`=? where `number`= ?"
    connection.query(sql, params,function (error, result) {
        if (error == null) {
            success("OK")
        } else {
            console.log(error)
        }
    })
    connection.end()
}

function queryStudentBynumber(number, success) {
    var connection = createConnection();
    connection.connect();
    var sql = "select * from studentinfo where `number` = ?";
    var params = [number];
    connection.query(sql, params, function (error, result) {
        if (error == null) {
            success(result[stu_id])
        } else {
            console.log(error)
        }
    })
    connection.end();
}
// queryStudentById(12,function(result){
//         console.log(result)
// })
// queryAllstudent(function(success){console.log(success)})
// insertStudent("name","birth","address",1,"phone","email")
// deleteStudentBynumber(3123)
// queryStudentBynumber(1231, function(result){console.log(result)})
module.exports = {
    "queryAllstudent": queryAllstudent,
    "insertStudent": insertStudent,
    "deleteStudentBynumber": deleteStudentBynumber,
    "modifyStudentById": modifyStudentById,
    "queryStudentBynumber": queryStudentBynumber
}