var menuList = document.getElementById('menu-list');
var tbody = document.getElementById('table-body');
var tableData = [];
var modal = document.getElementById('modal');

function bindEvent() {
    menuList.addEventListener('click', changeMenu, false)
    var submitBtn = document.getElementById('add-student-btn');
    submitBtn.addEventListener('click', submitStudent, false);
    tbody.addEventListener('click', clickTable, false);
    var editSubmit = document.getElementById('edit-submit-btn');
    editSubmit.addEventListener('click', editStudentSubmit, false);
    var mask = document.getElementById('mask');
    mask.addEventListener('click', function () {
        modal.style.display = "none";
    }, false)
    var studentListDom = menuList.getElementsByTagName('dd')[0]
    studentListDom.click();
}

function clickTable(e) {
    var tagName = e.target.tagName;
    if (tagName != 'BUTTON') {
        return false;
    }
    var isEdit = [].slice.call(e.target.classList).indexOf('edit') > -1;
    //判断点击的是否为编辑按钮
    if (isEdit) {
        var index = e.target.getAttribute('data-index')
        editStudent(tableData[index]);
    } else {
        var index = e.target.getAttribute('data-index')
        var isDel = window.confirm('确认删除？')
        // 如果确认返回ture 否则返回false
        if (isDel) {
            deleteStudentInSql(tableData[index].number, function (result) {
                if (result.data == "OK") {
                    alert('删除成功');
                    getTableDataInSql();
                }
            })
        }
    }
    //是编辑按钮，将索引值给一个数组，调用编辑学生函数
}

function editStudent(data) {
    modal.style.display = 'block';
    //显示编辑框
    console.log(data)
    renderEditForm(data);
}

function renderEditForm(data) {
    // 渲染编辑框，数据回填
    var editForm = document.getElementById('edit-form')
    console.log(data);
    for (var prop in data) {
        if (editForm[prop]) {
            editForm[prop].value = data[prop];
        }
    }
}

function editStudentSubmit(e) {
    e.preventDefault();
    var editForm = document.getElementById('edit-form');
    var studentObj = getFormDate(editForm)
    if (!studentObj) {
        return false;
    }
    var result = modifyStu(studentObj, function (result) {
        if (result.data == "OK") {
            alert('修改成功');
            getTableDataInSql();
        }
        // form.reset();
        var studentListDom = menuList.getElementsByTagName('dd')[0]
        studentListDom.click();
    })

};

function changeMenu(e) {
    var tagName = e.target.tagName;
    if (tagName != "DD") {
        return false;
    }
    console.log(this)
    var dd = this.getElementsByTagName('dd');
    for (var i = 0; i < dd.length; i++) {
        dd[i].className = '';
    }
    e.target.className = 'active';
    var id = e.target.getAttribute('data-id');
    var content = document.getElementById(id);
    var contentActive = document.getElementsByClassName('content-active')
    for (var i = 0; i < contentActive.length; i++) {
        contentActive[i].classList.remove('content-active');
    }
    content.classList.add('content-active')
    if (id == 'student-list') {
        getTableDataInSql();
    }
}
// 学生列表数据获取
function getTableData() {
    var result = transferData("/api/student/findAll", {}, function (result) {
        // console.log(result);
        renderTable(result);
    })
}


// api from sql
function getTableDataInSql() {
    ajaxGET("GET", "/api/student/findAll", function (result) {
        // console.log(result)
        renderTable(result);
    })
}

function deleteStudentInSql(number, callback) {
    ajaxGET("GET", "/api/student/deleteStu?" + "number=" + number, function (result) {
        callback(result)
    })
}

function insertStudent(studentObj,callback) {
    var str = "";
    for (var prop in studentObj) {
        str += prop + '=' + studentObj[prop] + '&';
    }
    ajaxGET("GET", '/api/student/insertStu?'+str, function(result){
        callback(result)
    })
}
function modifyStu(studentObj,callback){
    var str = "";
    for (var prop in studentObj) {
        str += prop + '=' + studentObj[prop] + '&';
    }
    ajaxGET("GET", '/api/student/modifyStu?'+str, function(result){
        callback(result)
    })
}



function renderTable(result) {
    var data = result.data;
    tableData = data;
    var str = ""
    for (var i = 0; i < data.length; i++) {
        // console.log(data[i].sex)
        str += "<tr>\
    <td>" + data[i].number + "</td>\
    <td>" + data[i].name + "</td>\
    <td>" + (data[i].sex ? "女" : "男") + "</td>\
    <td>" + data[i].email + "</td>\
    <td>" + data[i].birth + "</td>\
    <td>" + data[i].phone + "</td>\
    <td>" + data[i].address + "</td>\
    <td>\
        <button class='btn edit' data-index=" + i + ">编辑</button>\
        <button class='btn delete' data-index=" + i + ">删除</button>\
    </td>\
</tr>";

    }

    tbody.innerHTML = str;
}

function getFormDate(form) {
    var name = form.name.value;
    var sNo = form.sNo.value;
    var birth = form.birth.value;
    var sex = form.sex.value;
    var phone = form.phone.value;
    var email = form.email.value;
    var address = form.address.value;

    if (!sNo || !name || !sex || !phone || !email || !birth || !address) {
        alert('信息填写不全，请检查！')
        return false;
    }

    var studentObj = {
        name: name,
        sex: sex,
        phone: phone,
        email: email,
        birth: birth,
        address: address,
        number: sNo,
    }
    return studentObj;
}
// 新增学生
function submitStudent(e) {
    e.preventDefault(); //阻止form刷新默认事件

    var form = document.getElementById('add-student-form');
    var studentObj = getFormDate(form);

    // var result = saveData('http://api.duyiedu.com/api/student/addStudent', Object.assign(studentObj, {
    //     appkey: "yingweipeng_1560176520399"
    // }));
    if (!studentObj) {
        return false;
    }
    var result = insertStudent(studentObj, function (result) {
        if(result.data=="OK"){
            alert('新增成功');
            form.reset();
        }
        var studentListDom = menuList.getElementsByTagName('dd')[0]
        studentListDom.click();
    })

    // console.log(result);
    // if (result.status == 'success') {
    //     alert('新增成功');
    //     form.reset();
    //     var studentListDom = menuLIst.getElementsByTagName('dd')[0]
    //     studentListDom.click();
    // } else {
    //     alert(result.msg)
    // }
}

function transferData(url, param, cb) {
    // 数据交互
    var result = saveData("http://api.duyiedu.com" + url, Object.assign({
        appkey: "yingweipeng_1560176520399"
    }, param))
    if (result.status == 'success') {
        cb(result);
    } else {
        alert(result.msg);
    }
}
// 向后端存储数据url：http://api.duyiedu.com/api/student/findAll
// param:appkey:yingweipeng_1560176520399
// 添加学生/api/student/addStudent
function saveData(url, param) {

    var result = null;
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (typeof param == 'string') {
        xhr.open('GET', url + '?' + param, false);
    } else if (typeof param == 'object') {
        var str = "";
        for (var prop in param) {
            str += prop + '=' + param[prop] + '&';
        }
        xhr.open('GET', url + '?' + str, false);
    } else {
        xhr.open('GET', url + '?' + param.toString(), false);
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                result = JSON.parse(xhr.responseText);
            }
        }
    }
    xhr.send();
    return result;
}

bindEvent()