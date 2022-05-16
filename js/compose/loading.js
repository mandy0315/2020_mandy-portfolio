const init = function () {
  const d = 100,
    c = window.performance.timing;
  let e = -(c.loadEventEnd - c.navigationStart),
    a = parseInt((e / 1e3) % 60) * 100;
  $("body").hasClass("container") &&
    ($("#loading-wrapper").load("./share/loading.html", function () {
      $("#loading-map").css("display", "flex"), b();
    }),
    $("#m-loading-wrapper").load(".././share/loading.html", function () {
      $("#loading-map").css("display", "flex"), b();
    }),
    b(),
    f());
  function b() {
    $(".loadbar").animate({ width: d + "%" }, a),
      $(".loading-my").animate({ marginLeft: 100 + "%" }, a);
  }
  function f() {
    setTimeout(() => {
      $("#loading-container").fadeOut(400);
    }, a);
  }
};

export default { init };
