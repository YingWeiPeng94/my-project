function init() {
    bindEvent()
    $('#swiper').sliderImg({
        image:['./img/1.jpg','./img/2.jpg','./img/3.jpg'],
        href:["#","#","#"]
    })
}
function bindEvent(){
    $('.btn').hover(function () {
        $('.header .list').show();
    })
    $('.list').on('mouseleave', function(){
        if(window.innerWidth <='700'){
            $(this).hide()
        }
    })
    // 当浏览器页面尺寸大小发生改变会触发resize
    $(window).on('resize',function(){
        if(window.innerWidth>700){
            $('.list').show();
        }
        
    })
    $('.header a').on('click',function(){
        var id = $(this).attr('href')
        console.log(1)
        $('html,body').animate({
            scrollTop:$(id).offset().top+'px'
        },1000)
    })
}
init()