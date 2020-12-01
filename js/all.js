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

                } else {
                    $("body,#pagepiling>div").addClass("night");
                }
            }
        });
    }
    getServerTime();
    //header 載入
    $('header').load('./share/header.html', function () {
    });
    //nav 
    $('#pp-nav').append('<div class="line-dotted"></div>');

});