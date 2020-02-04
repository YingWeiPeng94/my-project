$('#myJD').addDropdown({
    // 下拉列表中每一列的宽度
    colWidth: 126,
    // 下拉列表总宽度
    dropDownWidth: 280,
    direction: 'y',
    menuList: [{
        title: "",
        items: [{
            href: '#',
            name: '待处理订单',
        }, {
            href: '#',
            name: '消息',
        }, {
            href: '#',
            name: '返修退换货',
        }, {
            href: '#',
            name: '我的问答',
        }, {
            href: '#',
            name: '降价商品',
        }, {
            href: '#',
            name: '我的关注',
        }],
    }, {
        title: '',
        items: [{
            href: '#',
            name: '我的京豆',
        }, {
            href: '#',
            name: '我的优惠券',
        }, {
            href: '#',
            name: '我的白条',
        }
        ],
    }]
});

$('#procurement').addDropdown({
    dropDownWidth: 140,
    colWidth: 56,
    menuList: [{
        title: '',
        items: [{
            href: '',
            name: '企业购'
        }, {
            href: '',
            name: '商用场景馆'
        }, {
            href: '',
            name: '工业品'
        }, {
            href: '',
            name: '礼品卡'
        }]
    }]
});


$('#service').addDropdown({
    title: '客户服务',
    colWidth: 70,
    dropDownWidth: 170,
    menuList: [{
        title: '客户',
        items: [{
            name: '帮助中心',
            href: ''
        }, {
            name: '售后服务',
            href: ''
        }, {
            name: '在线客服',
            href: '',
        }, {
            name: '意见建议',
            href: ''
        }, {
            name: '电话客服',
            href: ''
        }, {
            name: '客服邮箱',
            href: ''
        }, {
            name: '金融咨询',
            href: ''
        }, {
            name: '全球售客服'
        }]
    }, {
        title: '商户',
        items: [{
            name: '合作招商'
        }, {
            name: '学习中心'
        }, {
            name: '商家后台'
        }, {
            name: '京麦工作台'
        }, {
            name: '商家帮助'
        }, {
            name: '规则平台'
        }]
    }]
});

$('#bar-navs').addDropdown({
    direction: 'x',
    dropDownWidth: 1188,
    menuList: [{
        title: '特色主题',
        itemWidth: 340,
        colWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }, {
            name: '京东金融科技'
        }, {
            name: '陪伴计划'
        }, {
            name: '出海招商'
        }, {
            name: '拍拍'
        }]
    }, {
        title: '特色主题',
        itemWidth: 270,
        colWidth: 85,
        items: [{
            name: '京东试用'
        }, {
            name: '京东金融'
        }, {
            name: '全球售'
        }, {
            name: '国际站'
        }, {
            name: '京东会员'
        }, {
            name: '京东预售'
        }, {
            name: '买什么'
        }, {
            name: '俄语站'
        }, {
            name: '装机大师'
        }, {
            name: '0元评测'
        }, {
            name: '港澳售'
        }, {
            name: '优惠券'
        }, {
            name: '秒杀闪购'
        }, {
            name: '印尼站'
        }]
    }]
});
$('#swiper').swiper({
    imgList: ['https://img1.360buyimg.com/da/s590x470_jfs/t1/36626/1/11773/101331/5cf9fd07E20a31b94/57ae8abe34bebdd3.jpg!q90!cc_590x470.webp', 
                'https://img1.360buyimg.com/pop/s590x470_jfs/t1/59093/24/1607/97943/5cf64040E35019e3c/146d717401d191b4.jpg!q90!cc_590x470.webp',
            'https://img1.360buyimg.com/pop/s590x470_jfs/t1/54850/17/1372/95559/5cf22dbfE93749187/3e9ff5abd392ad9f.jpg!q90!cc_590x470.webp',
        'https://img20.360buyimg.com/babel/s590x470_jfs/t1/75044/39/1736/95484/5d00d14fE01e49b30/f9fb876af71a91bd.jpg!q90!cc_590x470.webp']
})
$('#swiper1').swiper({
    imgList: ['https://img10.360buyimg.com/mobilecms/s260x260_jfs/t1/83314/29/1628/131374/5cfe1ea2E97c5c178/9fe2d476786ccfed.jpg!q90!cc_130x130', 
                'https://img1.360buyimg.com/pop/s590x470_jfs/t1/59093/24/1607/97943/5cf64040E35019e3c/146d717401d191b4.jpg!q90!cc_590x470.webp',
            'https://img1.360buyimg.com/pop/s590x470_jfs/t1/54850/17/1372/95559/5cf22dbfE93749187/3e9ff5abd392ad9f.jpg!q90!cc_590x470.webp',
            'https://img20.360buyimg.com/babel/s590x470_jfs/t1/75044/39/1736/95484/5d00d14fE01e49b30/f9fb876af71a91bd.jpg!q90!cc_590x470.webp'
        ],
    animateType: 'animate',
    changeBtn: false,
    imgWidth: 200,
    showImgWidth: 800,
    isAuto: true,
});
$('#swiper-fade').imagesSwiper( {
    num: 3,
    direction: 'y',
    imgHeight: 160,
    imgWidth: 190,
    animate:'fade',
    images: [
        './image/jietu/2019_10_14 18_33_0.png',
        './image/jietu/2019_11_25 23_0_38.jpg',
        './image/jietu/2019_12_20 19_3_26.jpg',
        './image/jietu/2019_12_24 20_14_27.jpg',
        './image/jietu/2019_8_16 20_57_55.jpg',
        './image/jietu/2019_10_14 18_33_0.png',
    ]
})
$('#swiper-animate').imagesSwiper({
    num: 4,
    direction: 'x',
    imgHeight: 275,
    imgWidth: 200,
    animate:'animate',
    images: [
        './image/jietu/2019_10_14 18_33_0.png',
        './image/jietu/2019_11_25 23_0_38.jpg',
        './image/jietu/2019_12_20 19_3_26.jpg',
        './image/jietu/2019_12_24 20_14_27.jpg',
        './image/jietu/2019_8_16 20_57_55.jpg',
        './image/jietu/2019_10_14 18_33_0.png',
        './image/jietu/2019_8_16 20_57_55.jpg',
        './image/jietu/2019_10_14 18_33_0.png',
    ]
})
var menuList = [{//左侧二级联动列表数据
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件", "曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['手机', '运营商', '数码'],
    content: {
        tabs: ['手机'],
        subs: [{
            title: '手机',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '手表',

            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}, {
    title: ['家用电器'],
    content: {
        tabs: ['家电馆', '镇乡专卖店', '家电服务'],
        subs: [{
            title: '电视',
            items: ["曲面电视", "超薄电视", "OLED电视", "4K超清电视", "55英寸", "65英寸", "电视配件"]
        }, {
            title: '空调',
            items: ["壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新", "壁挂式空调", "柜式空调", "中央空调", "一级能效空调", "变频空调", "1.5匹空调", "以旧换新"]
        }]
    }
}];
function renderLeftMenuList(){//渲染左侧菜单
    menuList.forEach(function(menu){
        var oLi = $('<li></li>');
            menu.title.forEach(function(title,index){
                $('<a href="#">'+title+'</a>').appendTo(oLi);
                if(index != menu.title.length-1){
                    $('<span>/</span>').appendTo(oLi);
                }
            });
        $('#menu-list').append(oLi);
        
    })
}
var hideTimer = null;
function leftMenuEvent(){//绑定事件
    $('#menu-list').on('mouseenter','li',function(){
        clearTimeout(hideTimer);
        var index = $(this).index();
        renderLeftMenuContent(menuList[index].content);
        $('#menu-content').show();
    }).on('mouseleave','li',function(){
        hideTimer = setTimeout(function(){
            $('#menu-content').hide();
        },500);//设定定时器延迟隐藏
        
    });
    $('#menu-content').on('mouseenter',function(){
        clearTimeout(hideTimer);//取消定时器
    }).on('mouseleave',function(){
        hideTimer = setTimeout(function(){
            $('#menu-content').hide();
        },500);
        
    });
}
function renderLeftMenuContent(data){//渲染二级列表弹出内容
    $('#menu-content').empty();
    var oUl = $('<ul class="tabs"></ul>');
    data.tabs.forEach(function (tab){
        $('<li></li>').text(tab).appendTo(oUl);
    });
    
    
    var oDiv = $('<div class="item-content"></div>');
    data.subs.forEach(function(sub){
        var oDl = $('<dl></dl>');
        $('<dt></dt>').text(sub.title).appendTo(oDl);
        var oDD = $('<dd></dd>');
        sub.items.forEach(function (item){
            $('<a href="#">'+item+'</a>').appendTo(oDD);
        });
        
        oDl.append(oDD).appendTo(oDiv);
    });
    $('#menu-content').append(oUl).append(oDiv);
}
function serviceEvent(){//
    $('.service-entry>ul').on('mouseenter','.item-frame',function(){
        $('.service').addClass('service-extend');
        $('.service-entry>ul>.active').removeClass('active');
        $(this).addClass('active');
        var msg = $(this).find('span').text();
        $('.service-content').text(msg);
    });
    $('.close').click(function () {
        $('.service-extend').removeClass('service-extend');
        $('.service-entry > ul ').off('mouseenter');
        $('.service-entry>ul>.active').removeClass('active');
        setTimeout(function () {
            serviceEvent();
        }, 500);
       
    });
    
}
renderLeftMenuList();
leftMenuEvent();
serviceEvent();
