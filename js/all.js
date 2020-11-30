$(document).ready(function () {
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
    $('header').load('../component/header.html', function () {
    });
    function windowSize() {
        var navPosition = $('#pp-nav');
        if ($(window).width() <= 768) {
            navPosition.addClass("center");
            navPosition.removeClass("right");
        } else {
            navPosition.addClass("right");
            navPosition.removeClass("center");
        }
    };
    $(window).resize(function () {
        windowSize();
    });

    
    
});