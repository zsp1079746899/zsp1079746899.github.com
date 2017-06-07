$(document).ready(function(){
    row();
});

function row(){
    $('.yk-slide').children('.modslide').children('.paneel').animate({left:'-=220px'},1200);
    $('.yk-slide').children('.modslide').children('.paneel').animate({left:'-=220px'},1200);
    $('.yk-slide').children('.modslide').children('.paneel').animate({left:'-=220px'},1200);
    $('.yk-slide').children('.modslide').children('.paneel').animate({left:'-=220px'},1200);
    $('.yk-slide').children('.modslide').children('.paneel').animate({left:'-=220px'},1200);
    $('.yk-slide').children('.modslide').children('.paneel').animate({left:'-=220px'},1200);
    $('.yk-slide').children('.modslide').children('.paneel').animate({left:'+=1320px'},1200);
    row();
}
//登录
$('.g-head .head-box .log-in .text1').click(function(){
        $('.yk-logpop').css('display','block');
        $('.yk-backface').css('display','block');
});
//关闭登录界面
$('.yk-close').click(function(){
        $('.yk-logpop').css('display','none');
        $('.yk-backface').css('display','none');
});
//打开更多隐藏面板
    $('.top-nav-more').click(function(){
        $('.top-nav-more ul').css('display','block');
    });   
//打开下载隐藏界面
$('.top-nav-right').click(function(){
        $('.top-nav-right .uul').css('display','block');
});








                  