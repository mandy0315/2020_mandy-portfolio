$(document).ready(function(){
	const width = 100
	const perfData = window.performance.timing //检测页面加载速度
	let EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart)//loadEventEnd load事件執行完的時間/navigationStart 加載起始時間
	let time = parseInt((EstimatedTime/1000)%60)*100
	
	if ($("body").hasClass('container')) {
		$('#loading-wrapper').load('./share/loading.html', function () {
			$('#loading-map').css('display', 'flex');
			LoadingInit();
		});
		$('#m-loading-wrapper').load('.././share/loading.html', function () {
			$('#loading-map').css('display', 'flex');
			LoadingInit();
		});
		LoadingInit();
		LoadingClose();
	}
	function LoadingInit(){
		// Loadbar Animation 
		$(".loadbar").animate({
			width: width + "%"
		}, time);
		$(".loading-my").animate({
			marginLeft: 100 + "%"
		}, time);
	}
	function LoadingClose() {
		setTimeout(() =>{
			$('#loading-container').fadeOut(400);
		}, time);
	}
});
