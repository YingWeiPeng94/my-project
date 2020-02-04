(function($){
    // 下拉列表扩展
    function DropDown(options){
        this.father = options.father;//父dom
        this.menuList = options.menuList;//需要展示列表的参数
        this.direction = options.direction || 'y';//展示方向
        this.dropDownWidth = options.dropDownWidth;//列表宽度
        this.colWidth = options.colWidth;//列表中每一列的宽度
        this.init = function(){
            // 初始化
            // 若把代码写在这里，容易每次创建对象都会创建所有函数
            this.createDom();//创建dom结构
            this.initStyle();//初始化样式
            this.bindEvent();//绑定事件
        }
    }
    DropDown.prototype.createDom = function(){
        var oDiv = $('<div class="my-dropdown"></div>');
        this.menuList.forEach(function(menu){
            // 循环参数列表
            var oDl = $('<dl></dl>')
            if(menu.title != ""){
                $('<dt>'+menu.title+'</dt>').appendTo(oDl);
                // 创建标题
            }
            menu.items.forEach(function(item){
                $('<dd><a href="'+item.href+'">'+ item.name +'</a></dd>').appendTo(oDl);
            });
            if(menu.itemWidth){//设置每一项宽度
                oDl.css({
                    width: menu.itemWidth,
                })
            }
            if(menu.colWidth){//设置每一列宽度
                $('dd',oDl).css({
                    width: menu.colWidth,
                })
            }
        oDl.appendTo(oDiv);
        })
        $(this.father).append(oDiv);
    }
    DropDown.prototype.initStyle = function(){
        $(this.father).css({
            position:'relative'
        }).find('.my-dropdown').css({
            position:'absolute',
            left:0,
            width:this.dropDownWidth,
            backgroundColor:'#fff',
            border:'1px solid #ccc',
            borderTop:'none',
            display:'none',
            zIndex:'999'
        }).find('dl').css({
            padding:'10px 0 10px 15px',
            borderBottom:'1px solid #ccc',
            overflow:'hidden',
        }).find('dt').css({
            fontWeight:'bold',
        }).end().find('dd').css({
            width:this.colWidth,
            float:'left',
            whiteSpace:'nowrap'
        })
        if(this.direction == 'x'){
            $('.my-dropdown',this.father).css({
                left:'auto',
                right:-73,
                padding:'15px 0'
            }).find('dl').css({
                float:'left',
                borderRight:'1px solid #ccc',
                borderBottom:'none',
            })
        }
    }
    DropDown.prototype.bindEvent = function(){
        $('.my-dropdown dl dd',this.father).hover(function(){
            this.color = $(this).css('color');
            $('a',this).css({
                color:'red',
            })
        },function(){
            $('a',this).css({
                color:this.color,
            })
        });
        $(this.father).hover(function(){
            $(this).css({
               backgroundColor:'#fff', 
            })
            $('.my-dropdown',this).show();
        },function(){
            $(this).css({
                backgroundColor:'transparent', 
             })
            $('.my-dropdown',this).hide();
        });
    };
    $.fn.extend({
        addDropdown:function(options){
            options.father=this;/* 保存调用dom元素 */
            var obj = new DropDown(options);//创建下拉列表
            obj.init();//入口函数
        }
    }
    )
}(jQuery))