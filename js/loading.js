$(document).ready(function(){
  if($("body").hasClass('home')){
    LoadingInit();
  }
  function LoadingInit(){
    $('#loading-box').load("./share/loading.html");
    setTimeout(() => {
      $("#loading").show
    }, 2500);
  }
});
$(window).on('load',function () {
  if ($("body").hasClass('home')) {
    LoadingClose();
  }
  function LoadingClose() {
  setTimeout(() => {
    $("#loading-box").slideUp(500);
  }, 4000);
  }
});