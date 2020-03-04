var studentDao = require("../dao/studentDao");
function queryAllStudent (success) {
    studentDao.queryAllstudent(success)
}
function insertStudent (name,number,birth,address,sex,phone,email) {
    studentDao.insertStudent(name,number,birth,address,sex,phone,email)
}
function deleteStudentBynumber(number,success) {
    studentDao.deleteStudentBynumber(number,success)
}
function queryStudentBynumber(number,success){
    studentDao.queryStudentBynumber(number,success)
}
function modifyStudentById(studentObj,success) {
    studentDao.modifyStudentById(studentObj,success)
}
module.exports = {
    "queryAllStudent":queryAllStudent,
    "insertStudent":insertStudent,
    "deleteStudentBynumber":deleteStudentBynumber,
    "queryStudentBynumber":queryStudentBynumber,
    "modifyStudentById": modifyStudentById
}