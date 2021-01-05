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
    // 執行呼叫
    SectionSlide();
    ArrowPages();
    HomeTime();
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
    // TweenMax 動畫
    // home-day-box 
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
    // home-night-box
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
    let AnimateDesign = function($main) {
        this.svgContainer = $main.find("#design-skill");
        if (this.svgContainer.length === 0) {
            return;
        }
        this.pen = this.svgContainer.find('#design-pen');
        this.penHeight = 40;
        this.penWidth = 82;
        this.penpoint = this.svgContainer.find('#pen-point');
        this.penpoint.css('opacity', '0');
        this.penpoint2 = this.svgContainer.find('#pen-point2');
        this.penpoint2.css('opacity', '0');
        this.heart = this.svgContainer.find('#design-line');
        this.heartPath = this.heart.find('#design-line-path')[0];

        if (!this.heartPath) {
            return;
        }
        this.pathobj = {
            length: 0,
            pathLength: this.heartPath.getTotalLength()
        }
        
        this.pen.css('transform-origin', '-6px -19px 195px');
        this.timeLine = new TimelineMax({
            yoyo: true,
            paused: true,
            repeat: -1
        })
        
        .to(this.penpoint, 0.4, {
            opacity: 1

        })

        .to(this.pathobj, 2, {
            length: this.pathobj.pathLength,
            ease: Linear.easeNone,
            onUpdateScope: this,
            onUpdate: function() {
                this.heartPath.style.strokeDasharray = [this.pathobj.length, this.pathobj.pathLength].join(' ');

                var coords = this.heartPath.getPointAtLength(this.pathobj.length);

                coords.y = coords.y + 50;
                coords.x = coords.x - 50;
                this.pen.css('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px) rotate(-45deg)');
            }
        })
        .to(this.penpoint2, 0.4, {
            opacity: 1

        });
        this.timeLine.play();
    };
    function DesignAnimation($main) {
        var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

        if(!is_firefox){  
            //firefox 31 bug
            new AnimateDesign($main);
        }
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
        $('.WorksTabs-web').load("./share/WorksTabs-web.html",function () {
            getLoadMore();
        });
        $('.WorksTabs-ui').load("./share/WorksTabs-ui.html",function () {
            getLoadMore();
        });
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
    // 手機版 左右滑動 
    function SectionSlide() {
        // 不需要jQuery mobile ,調整滑動的靈敏度，請調整5和-5
        $('.section').on('touchstart', function(event){
            const xClick = event.originalEvent.touches[0].pageX;
            $(this).one('touchmove', function(event){
                const xMove = event.originalEvent.touches[0].pageX;
                const sensitivityInPx = 5;
                if( Math.floor(xClick - xMove) > sensitivityInPx ){
                    hashName = window.location.hash
                    hashNum = data2[hashName]
                    hashNum++
                    if(hashNum>4){
                        hashNum = 0
                    }
                    window.location.href = '#'+data[hashNum]
                }
                else if( Math.floor(xClick - xMove) < -sensitivityInPx ){
                    hashName = window.location.hash
                    hashNum = data2[hashName]
                    hashNum--
                    if(hashNum<0){
                    hashNum = 4
                    }
                    window.location.href = '#'+data[hashNum]
                }
            });
            $(this).on('touchend', function(){
                $(this).off('touchmove');
            });
        });
    }

    // nav跳頁-指定段落執行動畫
    function NavClassAn() {
        $('#pp-nav>ul>li>a').click(function (e) { 
            let getAName = $(this).attr('href');
            //about
            $("#pagepiling [data-num=" + data2[getAName] + "] .about-my-box").addClass("about-my-box-an");
            $("#pagepiling [data-num=" + data2[getAName] + "] .about-contant-box").addClass("animate__animated animate__fadeInUp");
            //skills
            if ($("#pagepiling [data-num=" + data2[getAName] + "].section").hasClass("skills")) {
                $('.design-svg').load('./share/skills-design.html',function () {
                    DesignAnimation($(".design-svg"));
                });
                $("#pagepiling [data-num=" + data2[getAName] + "] .skills-my-box").addClass("skills-my-box-an");
                $("#pagepiling [data-num=" + data2[getAName] + "] .skills-contant-box").addClass("animate__animated animate__fadeInUp");
                TypingTextAn();
            }
             //works
            $("#pagepiling [data-num=" + data2[getAName] + "] .works-my-box").addClass("works-my-box-an");
            $("#pagepiling [data-num=" + data2[getAName] + "] .tab-wrapper").addClass("animate__animated animate__fadeInUp");
            $("#pagepiling [data-num=" + data2[getAName] + "] .works-animal-box").addClass("works-animal-box-an");
            //contact
            $("#pagepiling [data-num=" + data2[getAName] + "] .contact-contant-wrapper").addClass("animate__animated animate__fadeInUp");
            $("#pagepiling [data-num=" + data2[getAName] + "]  .contact-FishsIslands-box,#pagepiling [data-num=" + data2[getAName] + "]  .m-contact-FishsTurtleMedusa-box").addClass("contact-FishsIslands-box-An");
        });
    }
    // hash&行動-指定段落執行動畫
    function HashClassAn() {
        window.addEventListener('hashchange',function(){
             setTimeout(() => {
                HashContant();
            }, 1000);
        });
        HashContant();
    }
    function HashContant() {
        let hashNameAn = window.location.hash
        let hashNumAn = data2[hashNameAn]
        //about
        $("#pagepiling [data-num=" + hashNumAn + "] .about-my-box").addClass("about-my-box-an");

        $("#pagepiling [data-num=" + hashNumAn + "] .about-contant-box").addClass("animate__animated animate__fadeInUp");
        //skills
        if ($("#pagepiling [data-num=" + hashNumAn + "].section").hasClass("skills")) {
            $('.design-svg').load('./share/skills-design.html',function () {
                DesignAnimation($(".design-svg"));
            });
            $("#pagepiling [data-num=" + hashNumAn + "] .skills-my-box").addClass("skills-my-box-an");
            $("#pagepiling [data-num=" + hashNumAn + "] .skills-contant-box").addClass("animate__animated animate__fadeInUp");
            TypingTextAn();
        }

        //works
        $("#pagepiling [data-num=" + hashNumAn + "] .works-my-box").addClass("works-my-box-an");

        $("#pagepiling [data-num=" + hashNumAn + "] .tab-wrapper").addClass("animate__animated animate__fadeInUp");
        $("#pagepiling [data-num=" + hashNumAn + "] .works-animal-box").addClass("works-animal-box-an");
        //contact
        $("#pagepiling [data-num=" + hashNumAn + "] .contact-contant-wrapper").addClass("animate__animated animate__fadeInUp");
        $("#pagepiling [data-num=" + hashNumAn + "] .contact-FishsIslands-box,#pagepiling [data-num=" + hashNumAn + "] .m-contact-FishsTurtleMedusa-box").addClass("contact-FishsIslands-box-An");
    }
    // bodymovin lottie動畫
    function BicycleAn(){
        lottie.loadAnimation({
            container: document.querySelector('.about-my-img'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/bicycle.min.json'
        });
    }
    function WalkAn(){
        lottie.loadAnimation({
            container: document.querySelector('.works-my-img'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/walk.min.json'
        });

    }
    function HitballoonAn(){
        lottie.loadAnimation({
            container: document.querySelector('.contact-myhitballoon'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/HotBalloon.min.json'
        });

    }
     function SwimAn(){
        lottie.loadAnimation({
            container: document.querySelector('.skills-my-img'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/swim.min.json'
        });

    }
    function AirCameraAn(){
        lottie.loadAnimation({
            container: document.querySelector('.about-AirCamera-img'),
            renderer: 'svg', 
            loop: true,
            autoplay: true,
            path: './json/AirCamera.min.json'
        });

    }
    // 打字動畫
    function TypingTextAn(){
        $(".text-box>.text").typed({
            //逗點換行
            strings:['img src="Dory.jpg"'],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 1500,
            showCursor: true,
            loop: true
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