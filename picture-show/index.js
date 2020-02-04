
setTimeout(function(){
    $('.wrapper').removeClass('init')
    // 进入页面yundong样式,运动后到指定位置,取消
},200)
$('.item').on('click',function(){
    $(this).addClass('active')
    $('.wrapper').addClass('wrapper-active')
    // 点击后改变样式
})
$('.close').on('click',function(e){
    e.stopPropagation();
    $('.active').removeClass('active')
    $('.wrapper').removeClass('wrapper-active')
})