function ajaxFunc(method, url, data, callback, flag) {
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXOject('Microsoft.XMLHttp');
    }
    method=method.toUpperCase();
    if (method == 'GET') {
        xhr.open(method, url + '?' + data, flag);
        xhr.send();
    } else if (method == 'POST') {
        xhr.open(method, url, flag);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    }
    xhr.onreadystatechange = function () {

        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                callback(xhr.responseText);
            }
        }
    }
}
function ajaxGET(method, url, callback){
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open(method,url,true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            // console.log(xmlHttp.responseText);
            callback(JSON.parse(xmlHttp.responseText))
        }
    }
}