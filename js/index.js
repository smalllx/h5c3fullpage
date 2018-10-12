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
        },
        afterRender:function () {
            $('img.more').on('click',function () {
                $.fn.fullpage.moveSectionDown();
            });
        }

    });


});