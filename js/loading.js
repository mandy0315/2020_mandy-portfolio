$(document).ready(function(){
  if($("body").hasClass('container')){
    LoadingInit();
  }
  function LoadingInit(){
    $('#loading-box').load("./share/loading.html");
    $('#loading-works-box').load(".././share/loading.html");
    // setTimeout(() => {
    //   $("#loading").show
    // }, 2500);
  }
});
$(window).on('load',function () {
  if ($("body").hasClass('container')) {
    LoadingClose();
  }
  function LoadingClose() {
  setTimeout(() => {
    $("#loading-box,#loading-works-box").slideUp(500);
  }, 1000);
  }
});