$(document).ready(function () {
    // 偵測網址資料庫
    let hashNum = 0
    let data = ["home","about","skills","works","contact"]
    let data2 = {
        "": "0",
        "#home": "0",
        "#about": "1",
        "#skills": "2",
        "#works": "3",
        "#contact": "4"
    }
    let hashName = window.location.hash
    // pagepiling 自訂
    $('#pagepiling').pagepiling({
        //水平換頁
        direction: 'horizontal',
        menu: '#menu',
        //換頁速度
        scrollingSpeed: 700,
        //循環回到首頁
        loopBottom: true,
        // 背景色
        sectionsColor: ['#E3E3E3', '#E3E3E3', '#F1CA9E', '#94C28B', '#5596CA'],
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
    // 停止滾動
    $.fn.pagepiling.setAllowScrolling(false);
    // 執行呼叫
    SectionSlide();
    BlueBgMousemove();
    worksTabs();
    NavClassAn();
    HashClassAn();
    BicycleAn();
    WalkAn();
    HitballoonAn();
    SwimAn();
    AirCameraAn();
    // nav 虛線匯入
    $('#pp-nav').append('<div class="line-dotted"></div>');
    // header 載入
    $('header').load('./share/header.html', function () {
        MenuPlay();
        HomeTime();
        ArrowPages();
        MenuAnchor();
        $(".logo-wrapper>a").click(function(){
            window.location.href = 'index.html#home'
        })
    });
    // 768px 執行滾動
    let mm = window.matchMedia("(max-width: 768px)");
    resizeWidth(mm);
    function resizeWidth(pMatchMedia) {
        if (pMatchMedia.matches) {
            $(".about,.skills").addClass("pp-scrollable");
            $(".about,.skills").removeClass("pp-table");
        }else {
            $(".about,.skills").removeClass("pp-scrollable");
            $(".about,.skills").addClass("pp-table");
        }
    }
    // Time 時間更換背景|動畫
    function HomeTime() {
        $.ajax({
            type: 'GET',
            url: '',
            cache: false,
            success: function (e) {
            todayDate = new Date();
                let hh = todayDate.getHours();
                if (hh >= 6 && hh <= 16) {
                    $(".home-day-box").addClass("active");
                    $(".home-night-box").removeClass("active");
                    // 車子動畫
                    $(".home-day-car,.home-day-car2").addClass("active");
                    $(".home-night-car,.home-night-car2").removeClass("active");
                    //背景
                    $(".section-AirBg-wrapper,.menu-contant-box").addClass("day");
                    $(".contact-sea-wrapper").addClass("day-contact-sea");
                    // Timeline動畫
                    DayTimelineAn();
                } else {
                    $(".home-night-box").addClass("active");
                    $(".home-day-box").removeClass("active");
                    // 車子動畫
                    $(".home-night-car,.home-night-car2").addClass("active");
                    $(".home-day-car,.home-day-car2").removeClass("active");
                    //背景
                    $(".section-AirBg-wrapper,.menu-contant-box").addClass("night");
                    $(".contact-sea-wrapper").addClass("night-contact-sea");
                    // Timeline動畫
                    NightTimelineAn();
                }
            }
        });
    }
    // home-day-box 動畫
    function DayTimelineAn() {
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
    // home-night-box 動畫
    function NightTimelineAn() {
        const scene2 = document.querySelector('.home-night-box');
        const mainTimeline = new TimelineMax();
        //
        const bigTitle = scene2.querySelectorAll('.big-title-box img');
        const stars = scene2.querySelectorAll('.home-night-star-box .home-night-star img');
        mainTimeline.delay(1.8);
        mainTimeline
            .staggerFrom(stars, 0.8, { opacity: 0, y: 100, ease: Back.easeOut }, 1)
            .staggerFrom(bigTitle, 0.4, { opacity: 0, scale: 0.2, x: 30, y: 30, ease: Back.easeOut })
    }
    // 滑鼠移動動態
    function BlueBgMousemove() {
        //鼠标指针移动时发生 mousemove 事件
        $(window).mousemove(function (e) {
            //获取鼠标坐标：
            const pagex = e.pageX;
            const pagey = e.pageY;
            let width = window.innerWidth / 2;
            //滑鼠  -50 同放向 50 反放向
            let starX = ((width - pagex) / - 100);
            let starRX = ((width - pagex) / + 100);
            $(".home-bluecity-up img").css("transform", "translateX(" + starX + "px)")
            $(".home-bluecity-down img").css("transform", "translateX(" + starRX + "px)")
        });
    };
    // icon 社群載入
    function CommunityIcon() {
        $('.fb-icon>a').prepend('\<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.52 46.83">\<path d = "M46.65,4.07A13.22,13.22,0,0,1,52.4,3,11.63,11.63,0,0,1,58.23,4.6a7.51,7.51,0,0,1,1.25.93,10.48,10.48,0,0,1,1.11,1.1l.89,1.26a9.24,9.24,0,0,1,.67,1.38A11.71,11.71,0,0,1,63,12.14a19.21,19.21,0,0,1,.09,2.93c-.39-.91-.63-1.82-1-2.69l-.58-1.26c-.1-.2-.17-.42-.28-.62l-.37-.57a10.23,10.23,0,0,0-3.6-3.73,13.49,13.49,0,0,0-5-1.79A28.74,28.74,0,0,0,46.65,4.07Z" />\<path d="M53.07.63A9.62,9.62,0,0,1,57,0a7.86,7.86,0,0,1,3.86,1.13A6.45,6.45,0,0,1,63.43,4.2,8.78,8.78,0,0,1,64,6.11a18.43,18.43,0,0,1,.13,2c-.22-.62-.35-1.25-.58-1.84a10.45,10.45,0,0,0-.79-1.69,6.82,6.82,0,0,0-2.47-2.61A8.93,8.93,0,0,0,56.88.74,17.23,17.23,0,0,0,53.07.63Z"/>\<path d="M64.82,27.52h0a.14.14,0,0,1,0-.06c-.13-.36-.26-.71-.41-1l-.06-.13c-.14-.29-.28-.58-.44-.86l-.12-.21a11.53,11.53,0,0,0-1.23-1.76l-.17-.19c-.19-.22-.38-.42-.59-.62l-.15-.15a9.85,9.85,0,0,0-.78-.67l-.17-.12a7.51,7.51,0,0,0-.68-.47l-.24-.15a9.5,9.5,0,0,0-.89-.48s0-.08,0-.13c0-6.69-4.84-12.12-10.81-12.12a9.89,9.89,0,0,0-3.35.6A15.27,15.27,0,0,0,31.92,1.53c-5.65,0-10.58,3.34-13.36,8.34a15,15,0,0,0-2.24-.19C7.31,9.68,0,17.87,0,28c0,.35,0,.7,0,1H0c.48,9.62,7.59,17.25,16.29,17.25a14.79,14.79,0,0,0,7.5-2.06,10.52,10.52,0,0,0,14.44-.54,10.55,10.55,0,0,0,14.94.1,9.32,9.32,0,0,0,1.51.13c6,0,10.81-5.43,10.81-12.12A13.32,13.32,0,0,0,64.82,27.52Zm-27-10.64H35.9a2.2,2.2,0,0,0-2.49,2.38v2.86h4.23L37,26.53H33.41V37.19H28.64V26.53H24.77V22.12h3.87V18.76c0-3.83,2.28-5.94,5.77-5.94a23.36,23.36,0,0,1,3.41.3Z"/>\</svg>\
        ');
        $('.ig-icon>a').prepend('\<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.52 46.83">\<path d = "M46.65,4.07A13.22,13.22,0,0,1,52.4,3,11.63,11.63,0,0,1,58.23,4.6a7.51,7.51,0,0,1,1.25.93,10.48,10.48,0,0,1,1.11,1.1l.89,1.26a9.24,9.24,0,0,1,.67,1.38A12.19,12.19,0,0,1,63,12.14a20.57,20.57,0,0,1,.08,2.93c-.39-.91-.63-1.82-1-2.69l-.58-1.26c-.1-.2-.17-.42-.28-.62l-.37-.57A10.18,10.18,0,0,0,57.23,6.2a13.38,13.38,0,0,0-5-1.79A28.74,28.74,0,0,0,46.65,4.07Z" />\<path d="M53.07.63A9.62,9.62,0,0,1,57,0a7.86,7.86,0,0,1,3.86,1.13A6.45,6.45,0,0,1,63.43,4.2,8.78,8.78,0,0,1,64,6.11a18.43,18.43,0,0,1,.13,2c-.22-.62-.35-1.25-.58-1.84a10.45,10.45,0,0,0-.79-1.69,6.82,6.82,0,0,0-2.47-2.61A8.93,8.93,0,0,0,56.88.74,17.23,17.23,0,0,0,53.07.63Z"/>\<path d="M31.94,21.61a3.78,3.78,0,1,0,3.78,3.77A3.77,3.77,0,0,0,31.94,21.61Z"/>\<path d="M37.21,14.92H26.45A5.09,5.09,0,0,0,21.36,20V30.76a5.09,5.09,0,0,0,5.09,5.09H37.21a5.09,5.09,0,0,0,5.08-5.09V20A5.09,5.09,0,0,0,37.21,14.92ZM31.94,32.49A7.11,7.11,0,1,1,39,25.38,7.12,7.12,0,0,1,31.94,32.49Zm7-12.14a2.05,2.05,0,1,1,2-2.05A2.05,2.05,0,0,1,39,20.35Z"/>\<path d="M64.82,27.52h0a.14.14,0,0,1,0-.06c-.13-.36-.26-.71-.41-1l-.06-.13c-.14-.29-.28-.58-.44-.86l-.12-.21a11.53,11.53,0,0,0-1.23-1.76l-.17-.19c-.19-.22-.38-.42-.59-.62l-.15-.15a9.85,9.85,0,0,0-.78-.67l-.17-.12a7.51,7.51,0,0,0-.68-.47l-.24-.15a9.5,9.5,0,0,0-.89-.48s0-.08,0-.13c0-6.69-4.84-12.12-10.81-12.12a9.89,9.89,0,0,0-3.35.6A15.27,15.27,0,0,0,31.92,1.53c-5.65,0-10.58,3.34-13.36,8.34a15,15,0,0,0-2.24-.19C7.31,9.68,0,17.87,0,28c0,.35,0,.7,0,1H0c.48,9.62,7.59,17.25,16.29,17.25a14.79,14.79,0,0,0,7.5-2.06,10.52,10.52,0,0,0,14.44-.54,10.55,10.55,0,0,0,14.94.1,9.32,9.32,0,0,0,1.51.13c6,0,10.81-5.43,10.81-12.12A13.32,13.32,0,0,0,64.82,27.52Zm-19,3.24a8.57,8.57,0,0,1-8.56,8.57H26.45a8.58,8.58,0,0,1-8.57-8.57V20a8.58,8.58,0,0,1,8.57-8.57H37.21A8.57,8.57,0,0,1,45.77,20Z"/>\</svg>\
        ');
    };
    //  滑入執行動畫 
    function MenuPagesHover() {
        $(".menu-pages").hover(function () {
            let getAMenuName = $(this).attr('data-hoverAn');
            $(".menu-icon-wrapper").toggleClass(getAMenuName);
        });
    }
    // menu 執行 
    function MenuPlay() {
        // menu 開關
        $(".menu-icon-wrapper").click(function () {
            $(".menu-icon-wrapper").toggleClass("open-menu-icon-an");
            $("body").toggleClass("lock");
            $(".menu-bgw-box,.menu-contant-box").toggleClass("active");
            $(".menu-hitballoon").toggleClass("animate__animated animate__fadeInUp");
            $(".logo-wrapper>a").fadeToggle(200);
        });
        $(".menu-bgw-box").click(function () {
            $(this).removeClass("active");
            $(".menu-contant-box").removeClass("active");
            $(".menu-icon-wrapper").removeClass("open-menu-icon-an");
            $(".menu-hitballoon").toggleClass("animate__animated animate__fadeInUp");
            $(".logo-wrapper>a").fadeIn(200);
        });
        $(".menu-text .menu-pages a").addClass('fas fa-arrow-circle-right');
        $(".menu-pages").click(function () { 
            $(".menu-bgw-box").removeClass("active");
            $(".menu-contant-box").removeClass("active");
            $(".menu-icon-wrapper").removeClass("open-menu-icon-an");
            $(".menu-hitballoon").toggleClass("animate__animated animate__fadeInUp");
            $(".logo-wrapper>a").fadeIn(200);
        });
        CommunityIcon();
        let mm = window.matchMedia("(min-width: 1024px)");
        resizeWidth(mm);
        function resizeWidth(pMatchMedia) {
            if (pMatchMedia.matches) {
                MenuPagesHover();
            }
        }
    }
    // 載入更多
    function getLoadMore() {
        let $WorksBox
        let $MoreBtn = $(".loadMore")
        $(".works-wrapper").each(function (index, element) {
            $WorksBox = $(this).find(".works-box")
            $WorksBox.slice(0, 6).css('display', 'inline-block');
        });
        // .on指定事件
        $MoreBtn.on("click", function (e) {
            e.preventDefault();
            let targetName = $(this).parent().parent().parent().parent().parent().find('.tabs >a.active').attr('title');

            $('.works-wrapper[data-name='+targetName+'] .works-box:hidden').slice(0, 6).fadeIn(500).css('display', 'inline-block');

            if ($('.works-wrapper[data-name='+targetName+'] .works-box:hidden').length == 0) {
                $(this).hide();
            }
        });
    }
    // tabs 切換功能
    function worksTabs() {
        $('.WorksTabs-web').load("./share/WorksTabs-web.html");
        $('.WorksTabs-ui').load("./share/WorksTabs-ui.html");
        $('.WorksTabs-vision').load("./share/WorksTabs-vision.html", function () {
            getLoadMore();
        });
        const $tabPanel = $('.tab-wrapper'),
            $tabs = $tabPanel.find('.tabs'),
            $tab = $tabs.find('a'),
            $tabContent = $tabPanel.find('.tab-content'),
            $content = $tabContent.find('> div');

        $tab.eq(0).addClass('active');
        $content.eq(0).fadeIn(500).css('display', 'block').siblings().css('display', 'none');
        $tab.on('click', function () {
            let $tabIndex = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');
            $content.eq($tabIndex).fadeIn(900).css('display', 'block').siblings().css('display', 'none');
        });
    }
    // 偵測跳頁-左右滑動
    function SectionSlide() {
        $(".section").on("swipeleft", function(e){
            hashName = window.location.hash
            hashNum = data2[hashName]
            hashNum++
            if(hashNum>4){
                hashNum = 0
            }
            window.location.href = '#'+data[hashNum]
        });
         $(".section").on("swiperight", function(e){
            hashName = window.location.hash
            hashNum = data2[hashName]
            hashNum--
            if(hashNum<0){
                hashNum = 4
            }
            window.location.href = '#'+data[hashNum]
        });
    }
    // hash偵測跳頁-左右箭頭
    function ArrowPages() {
        $(".arrow-pages-right").click(function(e){
            hashName = window.location.hash
            hashNum = data2[hashName]
            hashNum++
            if(hashNum>4){
                hashNum = 0
            }
            window.location.href = '#'+data[hashNum]
        })
        $(".arrow-pages-left").click(function(e){
            hashName = window.location.hash
            hashNum = data2[hashName]
            hashNum--
            if(hashNum<0){
                hashNum = 4
            }
            window.location.href = '#'+data[hashNum]
        })
    }
    // nav跳頁-漢堡選單 
    function MenuAnchor() {
        $(".menu-pages").click(function(){
            let targetAnchorNum = $(this).attr('data-anchor')
            $("#pp-nav > ul > li:nth-child("+targetAnchorNum+") a").click()
            hashName = window.location.hash
            hashNum = data2[hashName];
        })
    }
    // nav跳頁-指定段落執行動畫
    function NavClassAn() {
        $('#pp-nav>ul>li>a').click(function (e) { 
            let getAName = $(this).attr('href');
            //about
            $("#pagepiling [data-num=" + data2[getAName] + "] .about-my-box").addClass("about-my-box-an");
            $("#pagepiling [data-num=" + data2[getAName] + "] .about-contant-box").addClass("animate__animated animate__fadeInUp");
            //skills
            $("#pagepiling [data-num=" + data2[getAName] + "] .skills-my-box").addClass("skills-my-box-an");
            $("#pagepiling [data-num=" + data2[getAName] + "] .skills-contant-box").addClass("animate__animated animate__fadeInUp");
             //works
            $("#pagepiling [data-num=" + data2[getAName] + "] .works-my-box").addClass("works-my-box-an");
            $("#pagepiling [data-num=" + data2[getAName] + "] .tab-wrapper").addClass("animate__animated animate__fadeInUp");
            $("#pagepiling [data-num=" + data2[getAName] + "] .works-animal-box").addClass("works-animal-box-an");
            //contact
            $("#pagepiling [data-num=" + data2[getAName] + "] .contact-contant-wrapper").addClass("animate__animated animate__fadeInUp");
            $("#pagepiling [data-num=" + data2[getAName] + "]  .contact-FishsIslands-box").addClass("contact-FishsIslands-box-An");
        });
    }
    // hash&行動-指定段落執行動畫
    function HashClassAn() {
        $(window).hashchange( function(){
            setTimeout(() => {
                HashContant();
            }, 1000);
        })
        HashContant();
    }
    function HashContant() {
        let hashNameAn = window.location.hash
        let hashNumAn = data2[hashNameAn]
        //about
        $("#pagepiling [data-num=" + hashNumAn + "] .about-my-box").addClass("about-my-box-an");

        $("#pagepiling [data-num=" + hashNumAn + "] .about-contant-box").addClass("animate__animated animate__fadeInUp");
        //skills
        $("#pagepiling [data-num=" + hashNumAn + "] .skills-my-box").addClass("skills-my-box-an");
        $("#pagepiling [data-num=" + hashNumAn + "] .skills-contant-box").addClass("animate__animated animate__fadeInUp");
        //works
        $("#pagepiling [data-num=" + hashNumAn + "] .works-my-box").addClass("works-my-box-an");

        $("#pagepiling [data-num=" + hashNumAn + "] .tab-wrapper").addClass("animate__animated animate__fadeInUp");
        $("#pagepiling [data-num=" + hashNumAn + "] .works-animal-box").addClass("works-animal-box-an");
        //contact
        $("#pagepiling [data-num=" + hashNumAn + "] .contact-contant-wrapper").addClass("animate__animated animate__fadeInUp");
        $("#pagepiling [data-num=" + hashNumAn + "] .contact-FishsIslands-box").addClass("contact-FishsIslands-box-An");
        flag = true;
    }
    // bodymovin
    function BicycleAn(){
        lottie.loadAnimation({
            container: document.querySelector('.about-my-img'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/bicycle.json'
        });

    }
    function WalkAn(){
        lottie.loadAnimation({
            container: document.querySelector('.works-my-img'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/walk.json'
        });

    }
    function HitballoonAn(){
        lottie.loadAnimation({
            container: document.querySelector('.contact-myhitballoon'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/HotBalloon.json'
        });

    }
     function SwimAn(){
        lottie.loadAnimation({
            container: document.querySelector('.skills-my-img'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/swim.json'
        });

    }
    function AirCameraAn(){
        lottie.loadAnimation({
            container: document.querySelector('.about-AirCamera-img'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/AirCamera.json'
        });

    }
    // 900px 後偵測橫屏
    let ms = window.matchMedia("(max-width: 900px)");
    resizeSWidth(ms);
    function resizeSWidth(SMatchMedia) {
        if (SMatchMedia.matches) {
            //用户变化屏幕方向时调用
            $(window).bind( 'orientationchange', function(e){
                MobileH();
            });
        }
    }
    function MobileH() {
        if (window.orientation==90||window.orientation==-90) {
            $(".mobileH-window").show()
        } else {
            $(".mobileH-window").fadeOut(500);
        }
    }
});