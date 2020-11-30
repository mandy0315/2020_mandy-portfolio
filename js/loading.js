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
    $('#loading-box').load("./share/loading.html");
    // setTimeout(() => {
    //   $(".loading-logo").addClass('active2')
    // }, 1500);
    setTimeout(() => {
      $("#loading").show
    }, 2500);
  }
  function LoadingClose(){
    // setTimeout(() => {
    //   $("#loading").addClass('active');
    // }, 3500);
    alert("反應");
    setTimeout(() => {
        $("#loading-box").slideUp(500);
    }, 4000);
  }
});
