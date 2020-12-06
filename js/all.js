$(document).ready(function () {
    //pagepiling 自訂
    $('#pagepiling').pagepiling({
        //水平換頁
        direction: 'horizontal',
        menu: '#menu',
        //換頁速度
        scrollingSpeed: 700,
        //循環回到首頁
        loopBottom: true,
        // 背景色
        sectionsColor: ['', '', '', '', ''],
        // 連結名稱
        anchors: ['home', 'about', 'skills', 'works', 'contact'],
        // 點瀏覽
        navigation: {
            'position': 'nav-position',
            'tooltips': ['Home', 'About', 'Skills', 'Works', 'Contact']
        },
        afterRender: function () {
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function (anchorLink, index) {
            if (index > 1) {
                $('#pp-nav').removeClass('custom');
            } else {
                $('#pp-nav').addClass('custom');
            }
        }
    });
    //nav 
    $('#pp-nav').append('<div class="line-dotted"></div>');
    //header 載入
    $('header').load('./share/header.html', function () {
        // menu 開關
        $(".menu-icon-wrapper").click(function () {
            $(".menu-icon-wrapper").toggleClass("open-menu-icon-an");
            $("body").toggleClass("lock");
            $(".menu-bgw-box").toggleClass("active");
            getServerTime()
        });
        $(".menu-bgw-box").click(function () {
            $(this).removeClass("active");
            $(".menu-icon-wrapper").removeClass("open-menu-icon-an");
        });
        $(".menu-text a").addClass('fas fa-arrow-circle-right');
    });
    //時間更換背景
    function getServerTime() {
        $.ajax({
            type: 'GET',
            url: '',
            cache: false,
            success: function (data, status, xhr) {
                todayDate = new Date();
                var hh = todayDate.getHours();
                if (hh >= 6 && hh <= 16) {
                    $("body,#pagepiling>div,.menu-contant-box").addClass("day");
                    $(".home-day-box").addClass("active");
                    $(".home-night-box").removeClass("active");
                    $(".home-day-car,.home-day-car2").addClass("active");
                    $(".home-night-car,.home-night-car2").removeClass("active");
                    getDayTimelineAn();
                } else {
                    $("body,#pagepiling>div,.menu-contant-box").addClass("night");
                    $(".home-night-box").addClass("active");
                    $(".home-day-box").removeClass("active");
                    $(".home-night-car,.home-night-car2").addClass("active");
                    $(".home-day-car,.home-day-car2").removeClass("active");
                    getNightTimelineAn();
                    getStarMousemove();

                }
            }
        });
    }
    // home-day-box 動畫
    function getDayTimelineAn() {
        var scene = document.querySelector('.home-day-box');
        var mainTimeline = new TimelineMax();
        //
        var bigTitle = scene.querySelectorAll('.big-title-box img');
        var sun = scene.querySelectorAll('.home-day-sun img');
        var clouds = scene.querySelectorAll('.home-day-cloud-an .home-day-cloud img');
        mainTimeline.delay(1.8);
        mainTimeline
            .staggerFrom(sun, 0.2, { opacity: 0, scale: 0, ease: Back.easeOut }, 0)
            .staggerFrom(clouds, 0.4, { opacity: 0, y: 100, ease: Back.easeOut }, 1)
            .staggerFrom(bigTitle, 0.4, { opacity: 0, scale: 0.2, x: 50, y: 30, ease: Back.easeOut })
            .to(clouds, 28, { x: '130%', ease: Back.ease })
    }
    //home-night-box 動畫
    function getNightTimelineAn() {
        var scene2 = document.querySelector('.home-night-box');
        var mainTimeline = new TimelineMax();
        //
        var bigTitle = scene2.querySelectorAll('.big-title-box img');
        var stars = scene2.querySelectorAll('.home-night-star-box .home-night-star img');
        mainTimeline.delay(1.8);
        mainTimeline
            .staggerFrom(stars, 0.8, { opacity: 0, y: 100, ease: Back.easeOut }, 1)
            .staggerFrom(bigTitle, 0.4, { opacity: 0, scale: 0.2, x: 30, y: 30, ease: Back.easeOut })
    }
    function getStarMousemove() {
        //鼠标指针移动时发生 mousemove 事件
        $(window).mousemove(function (e) {
            //获取鼠标坐标：
            var pagex = e.pageX;
            let width = window.innerWidth / 2;

            //滑鼠  -50 同放向 50 反放向
            let starX = ((width - pagex) / - 50);
            $(".home-night-star img").css("transform", "translateX(" + starX + "px)")
        });
    };
    getServerTime();

});