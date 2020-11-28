$(document).ready(function () {
    // header load
    $('header').load("./component/header.html");

    // pagepiling-fullpage
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
        menu: '#menu',
        loopBottom: true,
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: {
            'position': 'right',
            'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Pgae 4']
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
                    console.log("白天" + hh);
                    $("#pagepiling>div").addClass("day");
                } else {
                    console.log("晚上" + hh);
                    
                }
            }
        });
    }
    getServerTime();

});