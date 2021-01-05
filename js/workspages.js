$(document).ready(function () {
    // 按下執行 scroll-to-top 
    $('#scroll-to-top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
	// 768px 執行滾動
    let mm = window.matchMedia("(max-width: 768px)");
    resizeWidth(mm);
    function resizeWidth(pMatchMedia) {
        if (pMatchMedia.matches) {
            $(".worksPages-text-wrapper").removeClass("scrollme");
        }else {
			$(".worksPages-text-wrapper").addClass("scrollme");
        }
    }
});