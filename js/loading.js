$(document).ready(function(){
  if($("body").hasClass('home')){
    LoadingInit();
  }
  window.onload = function(){
      if($("body").hasClass('home')){
        LoadingClose();
      }
  }
  function LoadingInit(){
    alert("測試1");
    $('#loading-box').load("./share/loading.html");
    setTimeout(() => {
      $("#loading").show
    }, 2500);
  }
  function LoadingClose(){
    setTimeout(() => {
      alert("測試2");
      $("#loading-box").slideUp(500);
    }, 4000);
  }
});
