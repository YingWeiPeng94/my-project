var express = require("express");
var app = new express();
var url = require("url")
var studentService = require("./service/studentService")
app.use(express.static("page"));
app.get("/api/student/findAll",function (request,response) {
    // var params = url.parse(request.url, true).query
    studentService.queryAllStudent(function(result){
        // response.write(JSON.stringify(result));
        // console.log(result)
        response.send({
            msg:"查询成功",
            data:result,
            status:"success"
        })
        response.end()
    })
    // response.write("<html><body><h1>404</h1></body></html>");
})
app.get("/api/student/deleteStu", function(request, response){
    var params = url.parse(request.url, true).query;
    studentService.deleteStudentBynumber(params.number,function (result){
        response.send({
            msg:"删除成功",
            data:result,
            status:"success"
        })
        response.end()
    })
    
})
app.get("/api/student/insertStu",function(request,response){
    var params = url.parse(request.url, true).query;
    console.log(params)
    studentService.insertStudent(params,function(result){
        response.send({
            msg:"添加成功",
            data:result,
            status:"success"
        })
        response.end()
    })
})
app.get("/api/student/modifyStu",function(request,response){
    var params = url.parse(request.url, true).query; 
        studentService.modifyStudentById(params,function(result){
            response.send({
                msg:"添加成功",
                data:result,
                status:"success"
            })
            response.end()
        })
})

app.listen("12306")
