$(document).ready(function(){
  if($("body").hasClass('home')){
    LoadingInit();
  }
  function LoadingInit(){
    alert("測試1");
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
    alert("測試2");
    $("#loading-box").slideUp(500);
  }, 4000);
  }
});