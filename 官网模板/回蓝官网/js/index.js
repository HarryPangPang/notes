//if($(window).width()<=960){
//    $("body,html").css({"display":"none"});
//    alert("请在电脑查看");
//}

//手机端判断各个平台浏览器及操作系统平台
//function checkPlatform(){
//    if(/android/i.test(navigator.userAgent)){
//        $("body,html").css({"display":"none"});
//        alert("请在电脑查看");
//// 这是Android平台下浏览器
//    }
//    if(/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)){
//        $("body,html").css({"display":"none"});
//        alert("请在电脑查看");
//        //这是iOS平台下浏览器
//    }
//    if(/Linux/i.test(navigator.userAgent)){
//        $("body,html").css({"display":"none"});
//        alert("请在电脑查看");
//        //这是Linux平台下浏览器
//    }
//    if(/Linux/i.test(navigator.platform)){
//        $("body,html").css({"display":"none"});
//        alert("请在电脑查看");
//        //这是Linux操作系统平台
//    }
//    if(/MicroMessenger/i.test(navigator.userAgent)){
//        $("body,html").css({"display":"none"});
//        alert("请在电脑查看");
//        //这是微信平台下浏览器
//    }
//}
//$(document).ready(function(){
//    //alert(navigator.platform);
//    checkPlatform();
//});

if(/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
    if(window.location.href.indexOf("?mobile")<0){
        try{
            if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
                $("body,html").css({"display":"none"});
        alert("请在电脑查看");
            }else if(/iPad/i.test(navigator.userAgent)){
            }else{
                $("body,html").css({"display":"none"});
        alert("请在电脑查看");
            }
        }catch(e){}
    }
}


//---------------------------------------------------------------------------
$("#daohang>ul>li:nth-child(1)").css({borderTop:"3px solid red"});
var mySwiper=new Swiper('.swiper-container-v',{
    onSlideChangeEnd: function (mySwiper){
        if(mySwiper.activeIndex == 0){
            //$("#nav").removeClass("nav2").addClass("nav");
            $("#nav").animate({height:"100px","background-color":"transparent"},500);
            $("#nav .daohang ul li").animate({"line-height":"8em"},500);
            $("#nav .daohang ul li a").animate({"font-size":"1.8em"},500);
            $("#nav .call").animate({"margin-left":"3%","margin-top":"36px"},500);
            $("#nav .span1").animate({"margin-top":"29px"},500);
            $("#nav .nimg1").animate({"margin-top":"16px","width":"200px","height":"62px"},200);
            $("#nav .span2").animate({"margin-top":"11px","margin-left":"0.5%"},500);
            $("#daohang>ul>li:nth-child(1)").css({borderTop:"3px solid red"});
            $(".above").css({"display":"block"});
            $("#qq1").animate({"left":"27%"},1000);
            $(".qqright").animate({"right":"20%"},1000);

        }else{
            //$("#nav").removeClass("nav").addClass("nav2");
            $("#nav").animate({height:"80px","background-color":"rgba(0,0,0,0.5)"},500);
            $("#nav .daohang ul li").animate({"line-height":"6.2em"},500);
            $("#nav .daohang ul li a").animate({"font-size":"1.6em"},500);
            $("#nav .call").animate({"margin-left":"2%","margin-top":"26px"},500);
            $("#nav .span1").animate({"margin-top":"20px"},500);
            $("#nav .nimg1").animate({"margin-top":"13px","width":"160px","height":"50px"},200);
            $("#nav .span2").animate({"margin-top":"0px","margin-left":"0.3%"},500);
            $("#daohang>ul>li:nth-child(1)").css({borderTop:"3px solid transparent"});
            $(".above").css({"display":"none"});
            $("#qq1").animate({"left":"-30%"},1000);
            $(".qqright").animate({"right":"-50%"},1000);
        }
        if(mySwiper.activeIndex == 1){
            $("#daohang>ul>li:nth-child(2)").css({borderTop:"3px solid red"});

        }else{
            $("#daohang>ul>li:nth-child(2)").css({borderTop:"3px solid transparent"});
        }
        if(mySwiper.activeIndex == 2){
            $("#daohang>ul>li:nth-child(3)").css({borderTop:"3px solid red"});
        }else{
            $("#daohang>ul>li:nth-child(3)").css({borderTop:"3px solid transparent"});
        }
        if(mySwiper.activeIndex == 3){
            $("#daohang>ul>li:nth-child(4)").css({borderTop:"3px solid red"});
        }else{
            $("#daohang>ul>li:nth-child(4)").css({borderTop:"3px solid transparent"});
        }
        if(mySwiper.activeIndex == 4){
            $("#daohang>ul>li:nth-child(5)").css({borderTop:"3px solid red"});
        }else{
            $("#daohang>ul>li:nth-child(5)").css({borderTop:"3px solid transparent"});
        }
        if(mySwiper.activeIndex == 5){
            $("#daohang>ul>li:nth-child(6)").css({borderTop:"3px solid red"});
        }else{
            $("#daohang>ul>li:nth-child(6)").css({borderTop:"3px solid transparent"});
        }
        if(mySwiper.activeIndex == 6){
            $("#daohang>ul>li:nth-child(7)").css({borderTop:"3px solid red"});
        }else{
            $("#daohang>ul>li:nth-child(7)").css({borderTop:"3px solid transparent"});
        }
        if(mySwiper.activeIndex == 7){
            $("#daohang>ul>li:nth-child(8)").css({borderTop:"3px solid red"});
            $(".above").css({"display":"block"});
            $(".above").animate({"margin-top":"12%"},1000);
            $(".eng").animate({"bottom":"100px"},1000);
        }else{
            $("#daohang>ul>li:nth-child(8)").css({borderTop:"3px solid transparent"});
            $(".above").css({"display":"none"});
            $(".above").animate({"margin-top":"-20%"},1000);
            $(".eng").animate({"bottom":"-200px"},1000);
        }
    },
    pagination:'.swiper-pagination',
    direction:'vertical',
    //grabCursor:true,
    keyboardControl : true,
    mousewheelControl : true,
    paginationClickable :true
    //loop:true
});

$("#daohang ul li").click( function(){
    $("#daohang ul li").css({borderTop:"3px solid transparent"});
    $(this).css({borderTop:"3px solid red"});
    mySwiper.slideTo(($(this).index()),1000);
});


var twoswiper=new Swiper('.swiper-container-h', {

    onTransitionEnd: function (swiper) {
        if (swiper.activeIndex == 5||swiper.activeIndex == 1) {
            $(".qqright,#qq1").css({"display":"block"});
            $(".qqright").css({"display":"block"});
            $("#qq1").animate({"left":"27%"},800);
            $(".qqright").animate({"right":"20%"},800);

        } else {
            $(".qqright,#qq1").css({"display":"none"});
            //$(".qqright").css({"display":"none"});
            $("#qq1").animate({"left":"-30%"});
            $(".qqright").animate({"right":"-50%"});
        }

        if (swiper.activeIndex == 2) {
            $(".hs2").css({"display":"block"});
            $(".hs2").animate({"left":"9%"},800);
            $(".hs2-1").animate({"width":"50%"},800);
        } else {
            $(".hs2").css({"display":"none"});
            $(".hs2").animate({"left":"-40%"},300);
            $(".hs2-1").animate({"width":"100%"},300);
        }
        if (swiper.activeIndex == 3) {
            //$(".top").animate({"font-size":"6em"},800);
            $(".top").animate({"font-size":"4em"},800);
            $(".bottom").fadeIn(500);
        } else {
            $(".top").animate({"font-size":"8em"},300);
            $(".bottom").fadeOut(500);
        }
        if (swiper.activeIndex == 4||swiper.activeIndex == 0) {
            $(".top1").animate({"top":"25%"},600);
            $(".bottom1").animate({"bottom":"30%"},600);
            $(".mid1").animate({"bottom":"30%"},600);
        } else {
            $(".top1").animate({"top":"-10%"},300);
            $(".bottom1").animate({"bottom":"-10%"},300);
            $(".mid1").animate({"bottom":"-10%"},300);
        }
    },
    pagination:'.swiper-pagination-h',
    paginationHide:false,
    direction:'horizontal',
    paginationType : 'bullets',
    loop:true
});
var threeswiper=new Swiper('.swiper-container-h2',{
    onTransitionEnd: function (swiper) {
        if (swiper.activeIndex == 1||swiper.activeIndex == 4) {
            $("#slide7-nav-qq").animate({"top":"0px"},300)

        }else{

        }
        if (swiper.activeIndex == 2) {
            $("#slide7-nav-qq").animate({"top":"50px"},300)
        }else{

        }
        if (swiper.activeIndex == 3||swiper.activeIndex == 0) {
            $("#slide7-nav-qq").animate({"top":"100px"},300)
        }else{

        }
    },
    direction:'horizontal',
    loop:true,
    grabCursor:true
});
$("#slide7-nav ul li").mouseover( function(){
    var n=$(this).index();
    $("#slide7-nav-qq").stop().animate({"top":""+(n*50)+"px"});
    threeswiper.slideTo((n+1),400);

});
//2-1圆
$("#slide2-1").hover(
    function(){
        $("#slide2-1 .qwe1").stop().slideUp(500);
        $("#slide2-1 .qwe2").stop().slideUp(500,function(){
                $("#slide2-1-img").stop().animate({"background-position-x":"-168px", "background-position-y":"-355px"},400);
                $("#slide2-1 .qwedi").stop().animate({"height":"300px"},400);
                $("#slide2-1 strong").css("color","white");
            })
    },
    function(){
        $("#slide2-1 strong").css("color","#333333");
        $("#slide2-1 .qwedi").stop().animate({"height":"0px"},400);
            $("#slide2-1 .qwe1").stop().slideDown(700);
            $("#slide2-1 .qwe2").stop().slideDown(700);
        $("#slide2-1-img").stop().animate({"background-position-x":"-245px", "background-position-y":"-355px"},400);
    }
);

$("#slide2-2").hover(
    function(){
        $("#slide2-2 .qwe1").stop().slideUp(500);
        $("#slide2-2 .qwe2").stop().slideUp(500,function(){
            $("#slide2-2-img").stop().animate({"background-position-x":"-333px", "background-position-y":"-291px"},400);
            $("#slide2-2 .qwedi").stop().animate({"height":"300px"},400);
            $("#slide2-2 strong").css("color","white");
        });

    },
    function(){
        $("#slide2-2 strong").css("color","#333333");
        $("#slide2-2 .qwedi").stop().animate({"height":"0px"},400);
            $("#slide2-2 .qwe1").stop().slideDown(700);
            $("#slide2-2 .qwe2").stop().slideDown(700);
        $("#slide2-2-img").stop().animate({"background-position-x":"-413px", "background-position-y":"-291px"},400);
    }
);
$("#slide2-3").hover(
    function(){
        $("#slide2-3 .qwe1").stop().slideUp(500);
        $("#slide2-3 .qwe2").stop().slideUp(500,function(){
            $("#slide2-3-img").stop().animate({"background-position-x":"-328px", "background-position-y":"-360px"},400);
            $("#slide2-3 .qwedi").stop().animate({"height":"300px"},400);
            $("#slide2-3 strong").css("color","white");
        });
    },
    function(){
        $("#slide2-3 strong").css("color","#333333");
        $("#slide2-3 .qwedi").stop().animate({"height":"0px"},400);
            $("#slide2-3 .qwe1").stop().slideDown(700);
            $("#slide2-3 .qwe2").stop().slideDown(700);
        $("#slide2-3-img").stop().animate({"background-position-x":"-416px", "background-position-y":"-360px"},400);
    }
);

$("#slide2-4").hover(
    function(){
        $("#slide2-4 .qwe1").stop().slideUp(500);
        $("#slide2-4 .qwe2").stop().slideUp(500,function(){
            $("#slide2-4-img").stop().animate({"background-position-x":"-167px", "background-position-y":"-438px"},400);
            $("#slide2-4 .qwedi").stop().animate({"height":"300px"},400);
            $("#slide2-4 strong").css("color","white");
        });
    },
    function(){
        $("#slide2-4 strong").css("color","#333333");
        $("#slide2-4 .qwedi").stop().animate({"height":"0px"},400);
        $("#slide2-4 .qwe1").stop().slideDown(700);
        $("#slide2-4 .qwe2").stop().slideDown(700);
        $("#slide2-4-img").stop().animate({"background-position-x":"-247px", "background-position-y":"-438px"},400);
    }
);

$("#slide2-5").hover(
    function(){
        $("#slide2-5 .qwe1").stop().slideUp(500);
        $("#slide2-5 .qwe2").stop().slideUp(500,function(){
            $("#slide2-5-img").stop().animate({"background-position-x":"-336px", "background-position-y":"-438px"},400);
            $("#slide2-5 .qwedi").stop().animate({"height":"300px"},400);
            $("#slide2-5 strong").css("color","white");
        });
    },
    function(){
        $("#slide2-5 strong").css("color","#333333");
        $("#slide2-5 .qwedi").stop().animate({"height":"0px"},400);
        $("#slide2-5 .qwe1").stop().slideDown(700);
        $("#slide2-5 .qwe2").stop().slideDown(700);
        $("#slide2-5-img").stop().animate({"background-position-x":"-421px", "background-position-y":"-438px"},400);
    }
);
//slide3 遮罩
$("#slide3-1").hover(
    function(){
        $("#slide3-1 .slide3-q1").stop().animate({height:"178px"},500);
        $("#slide3-1 .slide3-q2").stop().animate({height:"92px"},500);
        $("#slide3-1-text p").css({color:"white"});
    },
    function(){
        $("#slide3-1 .slide3-q1").stop().animate({height:"0px"});
        $("#slide3-1 .slide3-q2").stop().animate({height:"0px"});
        $("#slide3-1-text p").css({color:"black"});
    }
);
$("#slide3-2").hover(
    function(){
        $("#slide3-2 .slide3-q1").stop().animate({height:"178px"},500);
        $("#slide3-2 .slide3-q2").stop().animate({height:"92px"},500);
        $("#slide3-2-text p").css({color:"white"});
    },
    function(){
        $("#slide3-2 .slide3-q1").stop().animate({height:"0px"});
        $("#slide3-2 .slide3-q2").stop().animate({height:"0px"});
        $("#slide3-2-text p").css({color:"black"});
    }
);
$("#slide3-3").hover(
    function(){
        $("#slide3-3 .slide3-q1").stop().animate({height:"178px"},500);
        $("#slide3-3 .slide3-q2").stop().animate({height:"92px"},500);
        $("#slide3-3-text p").css({color:"white"});
    },
    function(){
        $("#slide3-3 .slide3-q1").stop().animate({height:"0px"});
        $("#slide3-3 .slide3-q2").stop().animate({height:"0px"});
        $("#slide3-3-text p").css({color:"black"});
    }
);
$("#more").hover(function(){
        $(this).stop().animate({backgroundColor:"#2edbfe"},500);
        $(this).css({color:"white"});
},function(){
    $(this).stop().animate({backgroundColor:"transparent"},500);
    $(this).css({color:"#2edbfe"});
});
//第四页
$("#slide-4 div").hover(
    function(){
        //$("#slide-4 div").css({"background-position-y":" -20px"});
    $(this).stop().animate({"background-position-y": "-170px"},600);
    },
    function(){
        $(this).stop().animate({"background-position-y":"-20px"},500);
    }
);
//第六页

$(".swiper-slide-6>div").hover(function(){
    $(this).find(".zxc1").stop().animate({"height":"0px"},700);
    $(this).find(".zxc2").stop().animate({"height":"0px"},700);
},function(){
    $(this).find(".zxc1").stop().animate({"height":"140px"},700);
    $(this).find(".zxc2").stop().animate({"height":"140px"},700);
});
