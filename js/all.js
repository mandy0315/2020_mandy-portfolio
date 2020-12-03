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
        sectionsColor: ['', '', '', ''],
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
    //時間更換背景
    function getServerTime() {
        $.ajax({
            type: 'GET',
            url: '',
            cache: false,
            success: function (data, status, xhr) {
                todayDate = new Date();
                var hh = todayDate.getHours();
                if (hh >= 6 && hh <= 17) {
                    $("body,#pagepiling>div").addClass("day");
                    $(".home-day-box").addClass("active");
                    getTimelineAn();
                } else {
                    $("body,#pagepiling>div").addClass("night");
                    $(".home-day-box").removeClass("active");
                    getTimelineAn();

                }
            }
        });
    }
    getServerTime();
    //header 載入
    $('header').load('./share/header.html', function () {
    });
    // TimelineAn home-kv
    function getTimelineAn() {
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

});