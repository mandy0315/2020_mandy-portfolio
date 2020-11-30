$(document).ready(function () {
  if($("body").hasClass('home')){
    LoadingInit();
}
window.onload = function() {
    if($("body").hasClass('home')){
      LoadingClose()
    }
}
  function LoadingInit(){
    $('#loading-box').load("./component/loading.html");
    setTimeout(() => {
      $(".loading-logo").addClass('active2')
    }, 1500);
    setTimeout(() => {
      $("#loading").fadeIn()
    }, 2500);
  }
  function LoadingClose(){
    setTimeout(() => {
      $("#loading").addClass('active');
    }, 3500);
    setTimeout(() => {
      $("#loading-box").fadeOut(500);
    },4000)
  }
});
