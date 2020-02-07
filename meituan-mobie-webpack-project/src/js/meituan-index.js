import '../css/reset.css';
import '../css/list.css';
import '../webfont/iconfont.css';
import '../css/meituanIndex.css';
import $ from 'jquery';
window.$ = $;
function getData(){
    $.ajax({
        url:'http://localhost:9191/api/list.json',
        success:function(data){
            console.log(data)
            addList(data)
        },
        error:function () {
            console.log('error')
        }
    })
}
getData()
function addList(data){
    var str = "";
    data.list.forEach(function(ele,index){
        str +=' <li class="foodspic">\
							<a href="http://localhost:9191/info.html?id=' + ele.id +'" class="clearfix">\
                            <img src="'+ ele.info.imgurl +'" alt="">\
                            <dl>\
                                <dt>' + ele.info.name +'</dt>\
                                <dd>\
                                    <p class="foodtitle">' + ele.info.des+ '</p>\
                                    <p class="price">\
                                        <span><strong>'+ ele.info.price+'</strong><i>元</i></span>\
                                        <span>'+ele.info.newUser+'</span>\
                                        <span>'+ele.info.sale+'</span>\
                                    </p>\
                                </dd>\
                            </dl>\
                        </a>\
                    </li> '
        $('.guess-foodlist ul').html(str);
    })
}
$(window).on('scroll',function(){
    var top = $(window).scrollTop();
    if(top > 500){
        $('#gotop').slideDown();
    } else {
        $('#gotop').slideUp();
    }
})
$('#gotop').on('click',function(){
    $('html,body').animate({
        scrollTop:0
    })
})