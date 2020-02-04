(function ($) {
    // 多图轮播扩展
    function Swiper(options) {
        this.wrapper = options.wrapper;
        // 父级
        this.width = this.wrapper.width();
        //父级宽度
        this.height = this.wrapper.height();
        //父级高度
        this.imgWidth = options.imgimgWidth;
        //必须设置图片宽度
        this.imgHeight = options.imgHeight;
        //必须设置图片高度
        this.animate = options.animate || 'animate';
        // 轮播图片动画类型
        this.num = options.num;
        //一次展示图片的数量
        this.direction = options.direction || 'y';
        //轮播的方向
        this.images = options.images;
        //图片数组
        this.imgLength = options.images.length;
        //图片数量
        this.nowIndex = 0;
        // 当前图片索引
        this.flag = true;
        //运动锁
        this.timer = null;
        // 自动播放定时器
        this.auto = options.auto || true;
        this.init = function () {             
            this.createDom();
            this.initStyle();
            this.bindEvent();
            if (this.auto) {
                this.autoChange();
                
            }
        };

    }
    Swiper.prototype.createDom = function () {
        var oUl = $('<ul class="images-swiper"></ul>');
        var count = 0;
        var str = '';
        var firstItem = '';
        this.images.forEach((item, index) => {
            str += '<a href="#"><img src="' + item + '" alt=""/></a>';
            count++;
            if (count % this.num == 0) {
                $('<li><div>' + str + '</div></li>').appendTo(oUl)
                if (count == this.num) {
                    firstItem = str;
                    // 保存第一项轮播图
                }
                str = '';
            }
        })
        if (this.animate == 'animate') {
            $('<li><div>' + firstItem + '</div></li>').appendTo(oUl)
        }
        this.wrapper.append(oUl)
        // 左右两个切换按钮
        var leftBtn = $('<div class="left-btn btn">&lt;</div>');
        var rightBtn = $('<div class="right-btn btn">&gt;</div>');
        // 添加到页面中
        $(this.wrapper).append(oUl).append(leftBtn).append(rightBtn);
    }
    Swiper.prototype.initStyle = function () {
        this.wrapper.css({
            position: 'relative',
            overflow: 'hidden',
        })
        $('.images-swiper', this.wrapper).css({
            padding: 0,
            margin: 0,
            listStyle: 'none',
            textDecoration: 'none',
            width: this.width * this.num + 'px',
            height: this.height,
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
        }).find('li').css({
            width: this.width,
            height: this.height,
            display: 'inlineBlock',
            flexDirection: 'row',
        }).find('div').css({
            width: this.width + 'px',
            height: this.height + 'px',
        })
        if(this.animate=='fade'){
            $('.images-swiper', this.wrapper).find('li').css({
                position:'absolute',
                display:'none',
            }).eq(0).css({
                display:'block'
            })//解决第二个li闪烁一次的问题
        }
        if (this.direction == 'x') {

            $('.images-swiper', this.wrapper).find('a').css({
                display: 'inlineBlock',
                width: this.width / this.num,
                height: this.height,
            }).find('img').css({
                width: 200,
                height: this.imgHeight,
            })
        } else if (this.direction == 'y') {
            $('.images-swiper', this.wrapper).find('a').css({
                display: 'block',
                width: '100%',
                height: this.height / this.num,
            }).find('img').css({
                width: this.imgWidth,
                height: this.imgHeight,
            })
        }

        $('.btn', this.wrapper).css({
            width: 30,
            height: 30,
            lineHeight: '30px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            textAlign: 'center',
            color: '#fff',
            position: 'absolute',
            top: '50%',
            marginTop: -25,
            cursor: 'pointer',
            borderRadius: '0 15px 15px 0'
        }).filter('.right-btn').css({
            right: '0',
            borderRadius: '15px 0 0 15px'
        });
    }
    Swiper.prototype.bindEvent = function () {
        var self = this;
        var liNum = (self.imgLength) / self.num;
        //淡入淡出时li的个数
        $('.left-btn', self.wrapper).click(function () {
            if (!self.flag) {
                return false
            }
            if (self.nowIndex == 0) {
                self.nowIndex = liNum - 1;
                if (self.animate == 'animate') {
                    $('.images-swiper', self.wrapper).css({
                        left: -self.width * liNum,
                    });
                } else if (self.animate == 'fade') {
                    self.nowIndex = liNum;
                }
            } else {
                self.nowIndex--;
            }
            self.changeImage();
        })
        $('.right-btn', self.wrapper).click(function () {
            if (!self.flag) {
                return false
            }
            
            if (self.animate == 'animate') {
                if (self.nowIndex == liNum) {
                    $('.images-swiper', self.wrapper).css({
                        left: 0,
                    });
                    self.nowIndex = 1;
                } else {
                    self.nowIndex++;
                }
            } else if (self.animate == 'fade') {
                
                if (self.nowIndex == liNum -1) {
                    self.nowIndex = 0;
                } else {
                    self.nowIndex++;
                    console.log(self.nowIndex)
                }
                
            }

            self.changeImage();
        })
        self.wrapper.mouseenter(function () {
        // 鼠标移入停止轮播
            clearInterval(self.timer);
        }).mouseleave(function () {
            self.autoChange();
        });
    }
    Swiper.prototype.changeImage = function () {
        var self = this;
        self.flag = false;
        if (self.animate == 'animate') {
            $('.images-swiper', self.wrapper).animate({
                left: -self.nowIndex * self.width,
            }, function () {
                self.flag = true;
            })
        } else if(self.animate == 'fade'){
            // console.log($('.images-swiper>li', self.wrapper).fadeOut()
            //     .eq(1))
            //     $('.images-swiper>li', self.wrapper).eq(1).fadeIn()
            $('.images-swiper>li', self.wrapper).fadeOut()
                .eq(self.nowIndex).fadeIn(function () {
                    self.flag = true;
                })
        }
    }
    Swiper.prototype.autoChange = function () {
        var self = this;
        
        clearInterval(self.timer)
        this.timer = setInterval(function () {
            $('.right-btn', self.wrapper).trigger('click')
        }, 1800)

    }
    $.fn.extend({
        imagesSwiper: function (options) {
            options.wrapper = this;
            var obj = new Swiper(options);
            obj.init()
        }
    })
}(jQuery))