$(document).ready(function () {
  if($("body").hasClass('home')){
    LoadingInit();
  }
window.onload = function() {
    if($("body").hasClass('home')){
      alert("反應");
      LoadingClose()
    }
}
  function LoadingInit(){
    $('#loading-box').load("./share/loading.html");
    // setTimeout(() => {
    //   $(".loading-logo").addClass('active2')
    // }, 1500);
    setTimeout(() => {
      $("#loading").show
    }, 2500);
  }
  function LoadingClose() {
    $('#loading-box').load("./share/loading.html");
    // setTimeout(() => {
    //   $(".loading-logo").addClass('active2')
    // }, 1500);
    setTimeout(() => {
      $("#loading-box").slideUp(500);
    }, 4000);
  }
});
