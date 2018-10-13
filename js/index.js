/**
 * Created by asus on 2018/7/13.
 */
$(function(){
    $('.container').fullpage({
        sectionsColor:["#fadd67", "#84a2d4", "#ef674d", "#ffeedd", "#d04759", "#84d9ed", "#8ac060"],
        verticalCentered:false,
        navigation:true,
        afterLoad:function(anchorLink,index){
            $('.section').eq(index-1).addClass('now');
        },
        onLeave:function(index,nextIndex,direction){
            if(nextIndex==3&&index==2){
                $('.section').eq(index-1).addClass('leave');
                console.log(123456);
            }
            else if(nextIndex==4&&index==3){
                $('.section').eq(index-1).addClass('leave');
            }
            else if(nextIndex==6&&index==5){
                $('.section').eq(index-1).addClass('leave');
            }
            else if(index == 6 && nextIndex == 7){
                /*当前是从第6页到第7页*/
                $('.section07 .star').addClass('show');
                $('.section07 .text').addClass('show');
                $('.section07 .star img').each(function (i, item) {
                    /*$(item) == $(this);*/
                    /*img display:none*/
                    /*$(this).delay(i*0.5*1000).fadeIn();*/
                    /*img opacity*/
                    $(this).css('transition-delay',i*0.5+'s');
                });

            }
        },
        afterRender:function () {
            $('img.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });

        /*当第四屏的购物车动画结束之后执行收货地址的动画*/
            $('.section04 .cart').on('transitionend',function () {
                /* :last :first :visible :hidden :checked :selected jquery扩展选择器*/
                $('.screen04 .address').show().find('img:last').fadeIn(1000);
                $('.screen04 .text').addClass('show');
            });


            /*第八屏功能*/
            /*1.手要跟着鼠标移动*/
            $('.section08').on('mousemove',function (e) {
                /*鼠标的坐标设置给手*/
                $(this).find('.hand').css({
                    left:e.clientX -290,
                    top:e.clientY - 130
                });
            }).find('.again').on('click',function () {
                /*2.点击再来一次重置动画跳回第一页*/
                /*动画怎么怎么进行的？*/
                /*2.1 加now  类*/
                /*2.2 加leaved  类*/
                /*2.3 加show 类*/
                $('.now,.leaved,.show').removeClass('now').removeClass('leaved').removeClass('show');
                /*2.4 加css属性  后果：加一个style属性*/
                /*2.5 用jquery方法  show() fadeIn() 后果：加一个style属性*/
                $('.main [style]').removeAttr('style');

                /*跳回第一页*/
                $.fn.fullpage.moveTo(1);
            });
        },

    });


});