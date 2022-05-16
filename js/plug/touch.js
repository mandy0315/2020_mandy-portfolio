(function (i) {
  var g = function (b, c) {
      var a = document.createEvent("CustomEvent");
      return (
        a.initCustomEvent(c, !0, !0, b.target),
        b.target.dispatchEvent(a),
        (a = null),
        !1
      );
    },
    j = !1,
    c = !1,
    e = 20,
    f = 0.3,
    a = { x: 0, y: 0, px: 0, py: 0 },
    b = { x: 0, y: 0, px: 0, py: 0 },
    d = {
      touchstart: function (d) {
        (c = !0),
          (t = d.touches[0]),
          (a = { x: t.screenX, y: t.screenY, px: t.pageX, py: t.pageY }),
          (b = a);
      },
      touchmove: function (a) {
        if (a.touches.length > 1) {
          c = !1;
          return;
        }
        (t = a.touches[0]),
          (b = { x: t.screenX, y: t.screenY, px: t.pageX, py: t.pageY });
      },
      touchend: function (i) {
        var d, h;
        if (!c) return;
        j && console.log("end", b, a),
          (d = Math.abs(b.x - a.x)),
          (h = Math.abs(b.y - a.y)),
          h > d && d / h < f && Math.abs(a.py - b.py) > e
            ? g(i, b.y - a.y < 0 ? "gesture-up" : "gesture-down")
            : d > h &&
              h / d < f &&
              Math.abs(a.px - b.px) > e &&
              g(i, b.x - a.x < 0 ? "gesture-left" : "gesture-right"),
          (c = !1);
      },
      touchcancel: function (a) {
        c = !1;
      },
    },
    h;
  for (h in d) i.addEventListener(h, d[h], !1);
})(window.document);
