$(document).ready(function () {
    function getLoadMore() {
        var $WorksBox = $('.works-web'),
            $MoreBtn = $('.loadMore');
        //出現數量 
        $WorksBox.slice(0, 6).css('display', 'inline-block');
        //少於數量 MoreBtn不會出現
        if ($('.works-web:hidden').length == 0) {
            $MoreBtn.hide();
        }
        // MoreBtn 按下 出現數量
        $MoreBtn.on("click", function (e) {
            e.preventDefault();
            $('.works-web:hidden').slice(0, 6).fadeIn(500).css('display', 'inline-block');

            if ($('.works-web:hidden').length == 0) {
                $MoreBtn.hide();
            }
        });
    }
    function getLoadMore3() {
        var $WorksBox = $('.works-vision'),
            $MoreBtn = $('.loadMore');
        //出現數量 
        $WorksBox.slice(0, 6).css('display', 'inline-block');
        //少於數量 MoreBtn不會出現
        if ($('.works-vision:hidden').length == 0) {
            $MoreBtn.hide();
        }
        // MoreBtn 按下 出現數量
        $MoreBtn.on("click", function (e) {
            e.preventDefault();
            $('.works-vision:hidden').slice(0, 6).fadeIn(500).css('display', 'inline-block');

            if ($('.works-vision:hidden').length == 0) {
                $MoreBtn.hide();
            }
        });
    }
    function getLoadMore2() {
        var $WorksBox = $('.works-ui'),
            $MoreBtn = $('.loadMore');
        //出現數量 
        $WorksBox.slice(0, 6).css('display', 'inline-block');
        //少於數量 MoreBtn不會出現
        if ($('.works-ui:hidden').length == 0) {
            $MoreBtn.hide();
        }
        // MoreBtn 按下 出現數量
        $MoreBtn.on("click", function (e) {
            e.preventDefault();
            $('.works-ui:hidden').slice(0, 6).fadeIn(500).css('display', 'inline-block');

            if ($('.works-ui:hidden').length == 0) {
                $MoreBtn.hide();
            }
        });
    }
    getLoadMore();
    getLoadMore2();
    getLoadMore3();
    // function getMLoadMore() {
    //     var $WorksBox = $('.works-web'),
    //         $MoreBtn = $('.loadMore');
    //     //出現數量 
    //     $WorksBox.slice(0, 4).css('display', 'inline-block');
    //     //少於數量 MoreBtn不會出現
    //     if ($('.works-web:hidden').length == 0) {
    //         $MoreBtn.hide();
    //     }
    //     // MoreBtn 按下 出現數量
    //     $MoreBtn.on("click", function (e) {
    //         e.preventDefault();
    //         $('.works-web:hidden').slice(0, 4).fadeIn(500).css('display', 'inline-block');
    //         if ($('.works-web:hidden').length == 0) {
    //             $MoreBtn.hide();
    //         }
    //     });
    // }
    // // 768判斷
    // var mm = window.matchMedia("(max-width: 768px)");
    // mm.addListener(resizeWidth);
    // resizeWidth(mm);
    // function resizeWidth(pMatchMedia) {
    //     if (pMatchMedia.matches) {
    //         getMLoadMore();
    //     } else {
    //         getLoadMore();
    //         getLoadMore2();
    //     }
    // }
});