import header from "./compose/header.js";
import loading from "./compose/loading.js";

$(document).ready(function () {
  loading.init();
  header.init();
  // 偵測網址資料庫
  let hashNum = 0;
  let data = ["home", "about", "skills", "works", "contact"];
  let data2 = {
    "": "0",
    "#home": "0",
    "#about": "1",
    "#skills": "2",
    "#works": "3",
    "#contact": "4",
  };
  let hashName = window.location.hash;
  // 執行呼叫
  SectionSlide();
  ArrowPages();
  HomeTime();
  BlueBgMousemove();
  worksTabs();
  NavClassAn();
  HashClassAn();
  lottieAn();
  // nav 虛線匯入
  $("#pp-nav").append('<div class="line-dotted"></div>');
  // 1921px 以上執行滾動
  let mmB = window.matchMedia("(min-width: 1921px)");
  resizeBWidth(mmB);
  function resizeBWidth(BMatchMedia) {
    if (BMatchMedia.matches) {
      $(".about,.skills,.home,.contact").addClass("pp-scrollable");
      $(".about,.skills,.home,.contact").removeClass("pp-table");
    } else {
      $(".about,.skills,.home,.contact").removeClass("pp-scrollable");
      $(".about,.skills,.home,.contact").addClass("pp-table");
    }
  }
  // 1440px 以下執行滾動
  let mm = window.matchMedia("(max-width: 1440px)");
  resizeWidth(mm);
  function resizeWidth(pMatchMedia) {
    if (pMatchMedia.matches) {
      $(".about,.skills,.home,.contact").addClass("pp-scrollable");
      $(".about,.skills,.home,.contact").removeClass("pp-table");
    } else {
      $(".about,.skills,.home,.contact").removeClass("pp-scrollable");
      $(".about,.skills,.home,.contact").addClass("pp-table");
    }
  }
  // Time 時間更換背景|動畫
  function HomeTime() {
    let todayDate = new Date();
    let hh = todayDate.getHours();
    if (hh >= 6 && hh <= 16) {
      $(".home-day-box").addClass("active");
      $(".home-night-box").removeClass("active");
      // 車子動畫
      $(".home-day-car,.home-day-car2").addClass("active");
      $(".home-night-car,.home-night-car2").removeClass("active");
      //背景
      $(".section-AirBg-wrapper,.menu-contant-box").addClass("day");
      $(".contact-sea-wrapper").addClass("day-contact-sea");
      // Timeline動畫
      DayTimelineAn();
    } else {
      $(".home-night-box").addClass("active");
      $(".home-day-box").removeClass("active");
      // 車子動畫
      $(".home-night-car,.home-night-car2").addClass("active");
      $(".home-day-car,.home-day-car2").removeClass("active");
      //背景
      $(".section-AirBg-wrapper,.menu-contant-box").addClass("night");
      $(".contact-sea-wrapper").addClass("night-contact-sea");
      //Timeline動畫
      NightTimelineAn();
    }
  }
  // nav跳頁-指定段落執行動畫
  function NavClassAn() {
    $("#pp-nav>ul>li>a").click(function (e) {
      let getAName = $(this).attr("href");
      //home
      if (
        $("#pagepiling [data-num=" + data2[getAName] + "].section").hasClass(
          "home"
        )
      ) {
        $(".home-day-car,.home-night-car").toggleClass("home-car-up-an");
        $(".home-day-car2,.home-night-car2").toggleClass("home-car-down-an");
      }
      //about
      if (
        $("#pagepiling [data-num=" + data2[getAName] + "].section").hasClass(
          "about"
        )
      ) {
        $(".about-my-box").toggleClass("about-my-box-an");
        $(".about-my-photo-bg").toggleClass("about-my-photo-bg-an");
      }
      $(
        "#pagepiling [data-num=" + data2[getAName] + "] .about-contant-box"
      ).addClass("animate__animated animate__fadeInUp");
      //skills
      if (
        $("#pagepiling [data-num=" + data2[getAName] + "].section").hasClass(
          "skills"
        )
      ) {
        $(".skills-my-box").toggleClass("skills-my-box-an");
        TypingTextAn();
        SkillsDesignAnimation();
      } else {
      }
      $(
        "#pagepiling [data-num=" + data2[getAName] + "] .skills-contant-box"
      ).addClass("animate__animated animate__fadeInUp");
      //works
      if (
        $("#pagepiling [data-num=" + data2[getAName] + "].section").hasClass(
          "works"
        )
      ) {
        $(".works-my-box").toggleClass("works-my-box-an");
      }
      $(
        "#pagepiling [data-num=" + data2[getAName] + "] .works-my-box"
      ).addClass("works-my-box-an");
      $("#pagepiling [data-num=" + data2[getAName] + "] .tab-wrapper").addClass(
        "animate__animated animate__fadeInUp"
      );
      $(
        "#pagepiling [data-num=" + data2[getAName] + "] .works-animal-box"
      ).addClass("works-animal-box-an");
      //contact
      $(
        "#pagepiling [data-num=" +
          data2[getAName] +
          "] .contact-contant-wrapper"
      ).addClass("animate__animated animate__fadeInUp");
      $(
        "#pagepiling [data-num=" +
          data2[getAName] +
          "]  .contact-FishsIslands-box,#pagepiling [data-num=" +
          data2[getAName] +
          "]  .m-contact-FishsTurtleMedusa-box"
      ).addClass("contact-FishsIslands-box-An");
    });
  }
  // hash&行動-指定段落執行動畫
  function HashClassAn() {
    window.addEventListener("hashchange", function () {
      setTimeout(() => {
        HashContant();
      }, 1000);
    });
    HashContant();
  }
  function HashContant() {
    let hashNameAn = window.location.hash;
    let hashNumAn = data2[hashNameAn];
    //home
    if (
      $("#pagepiling [data-num=" + hashNumAn + "].section").hasClass("home")
    ) {
      $(".home-day-car,.home-night-car").addClass("home-car-up-an");
      $(".home-day-car2,.home-night-car2").addClass("home-car-down-an");
    } else {
      $(".home-day-car,.home-night-car").removeClass("home-car-up-an");
      $(".home-day-car2,.home-night-car2").removeClass("home-car-down-an");
    }
    //about
    if (
      $("#pagepiling [data-num=" + hashNumAn + "].section").hasClass("about")
    ) {
      $(".about-my-box").addClass("about-my-box-an");
      $(".about-my-photo-bg").addClass("about-my-photo-bg-an");
    } else {
      $(".about-my-box").removeClass("about-my-box-an");
      $(".about-my-photo-bg").removeClass("about-my-photo-bg-an");
    }
    $("#pagepiling [data-num=" + hashNumAn + "] .about-contant-box").addClass(
      "animate__animated animate__fadeInUp"
    );
    //skills
    if (
      $("#pagepiling [data-num=" + hashNumAn + "].section").hasClass("skills")
    ) {
      $(".skills-my-box").addClass("skills-my-box-an");
      TypingTextAn();
      SkillsDesignAnimation();
    } else {
      $(".skills-my-box").removeClass("skills-my-box-an");
    }
    $("#pagepiling [data-num=" + hashNumAn + "] .skills-contant-box").addClass(
      "animate__animated animate__fadeInUp"
    );
    //works
    if (
      $("#pagepiling [data-num=" + hashNumAn + "].section").hasClass("works")
    ) {
      $(".works-my-box").addClass("works-my-box-an");
    } else {
      $(".works-my-box").removeClass("works-my-box-an");
    }
    $("#pagepiling [data-num=" + hashNumAn + "] .tab-wrapper").addClass(
      "animate__animated animate__fadeInUp"
    );
    $("#pagepiling [data-num=" + hashNumAn + "] .works-animal-box").addClass(
      "works-animal-box-an"
    );
    //contact
    $(
      "#pagepiling [data-num=" + hashNumAn + "] .contact-contant-wrapper"
    ).addClass("animate__animated animate__fadeInUp");
    $(
      "#pagepiling [data-num=" +
        hashNumAn +
        "] .contact-FishsIslands-box,#pagepiling [data-num=" +
        hashNumAn +
        "] .m-contact-FishsTurtleMedusa-box"
    ).addClass("contact-FishsIslands-box-An");
  }
  // TweenMax 動畫
  // home-day-box
  function DayTimelineAn() {
    var scene = document.querySelector(".home-day-box");
    var mainTimeline = new TimelineMax();
    //
    var bigTitle = scene.querySelectorAll(".big-title-box img");
    var sun = scene.querySelectorAll(".home-day-sun img");
    mainTimeline.delay(3);
    mainTimeline
      .staggerFrom(sun, 0.2, { opacity: 0, scale: 0.2, ease: Back.easeOut }, 0)
      .staggerFrom(bigTitle, 0.4, {
        opacity: 0,
        scale: 0.2,
        x: 50,
        y: 30,
        ease: Back.easeOut,
      });
  }
  // home-night-box
  function NightTimelineAn() {
    const scene2 = document.querySelector(".home-night-box");
    const mainTimeline = new TimelineMax();
    //
    const bigTitle = scene2.querySelectorAll(".big-title-box img");
    const stars = scene2.querySelectorAll(
      ".home-night-star-box .home-night-star img"
    );
    mainTimeline.delay(3);
    mainTimeline
      .staggerFrom(stars, 0.8, { opacity: 0, y: 100, ease: Back.easeOut }, 1)
      .staggerFrom(bigTitle, 0.4, {
        opacity: 0,
        scale: 0.2,
        x: 30,
        y: 30,
        ease: Back.easeOut,
      });
  }
  function DesignAnimation($main) {
    var is_firefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;

    if (!is_firefox) {
      //firefox 31 bug
      new AnimateDesign($main);
    }
  }
  // 滑鼠移動動態
  function BlueBgMousemove() {
    //鼠标指针移动时发生 mousemove 事件
    $(window).mousemove(function (e) {
      //获取鼠标坐标：
      const pagex = e.pageX;
      const pagey = e.pageY;
      let width = window.innerWidth / 2;
      //滑鼠  -50 同放向 50 反放向
      let starX = (width - pagex) / -100;
      let starRX = (width - pagex) / +100;
      $(".home-bluecity-up img").css(
        "transform",
        "translateX(" + starX + "px)"
      );
      $(".home-bluecity-down img").css(
        "transform",
        "translateX(" + starRX + "px)"
      );
    });
  }
  // hash偵測跳頁-左右箭頭
  function ArrowPages() {
    $(".arrow-pages-right").click(function (e) {
      hashName = window.location.hash;
      hashNum = data2[hashName];
      hashNum++;
      if (hashNum > 4) {
        hashNum = 0;
      }
      window.location.href = "#" + data[hashNum];
    });
    $(".arrow-pages-left").click(function (e) {
      hashName = window.location.hash;
      hashNum = data2[hashName];
      hashNum--;
      if (hashNum < 0) {
        hashNum = 4;
      }
      window.location.href = "#" + data[hashNum];
    });
  }
  // 載入更多
  function getLoadMore() {
    let $WorksBox;
    let $MoreBtn = $(".loadMore");
    $(".works-wrapper").each(function (index, element) {
      $WorksBox = $(this).find(".works-box");
      $WorksBox.slice(0, 6).css("display", "inline-block");
    });
    // .on指定事件
    $MoreBtn.on("click", function (e) {
      e.preventDefault();
      let targetName = $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find(".tabs >a.active")
        .attr("title");

      $(".works-wrapper[data-name=" + targetName + "] .works-box:hidden")
        .slice(0, 6)
        .fadeIn(500)
        .css("display", "inline-block");

      if (
        $(".works-wrapper[data-name=" + targetName + "] .works-box:hidden")
          .length == 0
      ) {
        $(this).hide();
      }
    });
  }
  // tabs 切換功能
  function worksTabs() {
    $(".WorksTabs-web").load("./share/WorksTabs-web.html", function () {
      getLoadMore();
    });
    $(".WorksTabs-ui").load("./share/WorksTabs-ui.html", function () {
      getLoadMore();
    });
    $(".WorksTabs-vision").load("./share/WorksTabs-vision.html", function () {
      getLoadMore();
    });
    const $tabPanel = $(".tab-wrapper"),
      $tabs = $tabPanel.find(".tabs"),
      $tab = $tabs.find("a"),
      $tabContent = $tabPanel.find(".tab-content"),
      $content = $tabContent.find("> div");

    $tab.eq(0).addClass("active");
    $content
      .eq(0)
      .fadeIn(500)
      .css("display", "block")
      .siblings()
      .css("display", "none");
    $tab.on("click", function () {
      let $tabIndex = $(this).index();
      $(this).addClass("active").siblings().removeClass("active");
      $content
        .eq($tabIndex)
        .fadeIn(900)
        .css("display", "block")
        .siblings()
        .css("display", "none");
    });
  }
  // 手機版 左右滑動
  function SectionSlide() {
    const Section = document.querySelector("section");
    Section.addEventListener("gesture-left", function (e) {
      hashName = window.location.hash;
      hashNum = data2[hashName];
      hashNum++;
      if (hashNum > 4) {
        hashNum = 0;
      }
      window.location.href = "#" + data[hashNum];
    });
    Section.addEventListener("gesture-right", function (e) {
      hashName = window.location.hash;
      hashNum = data2[hashName];
      hashNum--;
      if (hashNum < 0) {
        hashNum = 4;
      }
      window.location.href = "#" + data[hashNum];
    });
  }
  // bodymovin lottie動畫
  function lottieAn() {
    let BicycleAn = lottie.loadAnimation({
      container: document.querySelector(".about-my-img"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./json/bicycle.min.json",
    });
    let SwimAn = lottie.loadAnimation({
      container: document.querySelector(".skills-my-img"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./json/swim.min.json",
    });
    let WalkAn = lottie.loadAnimation({
      container: document.querySelector(".works-my-img"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./json/walk.min.json",
    });
    let HitballoonAn = lottie.loadAnimation({
      container: document.querySelector(".contact-myhitballoon"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./json/HotBalloon.min.json",
    });
    let AirCameraAn = lottie.loadAnimation({
      container: document.querySelector(".about-AirCamera-img"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "./json/AirCamera.min.json",
    });
  }
  // 打字動畫
  function TypingTextAn() {
    $(".text-box>.text").typed({
      //逗點換行
      strings: ['img src="Dory.jpg"'],
      typeSpeed: 70,
      backSpeed: 40,
      backDelay: 1500,
      showCursor: true,
      loop: true,
    });
  }
  // skills design動畫
  function SkillsDesignAnimation() {
    $(".design-svg").load("./share/skills-design.html", function () {
      DesignAnimation($(".design-svg"));
    });
  }
  let AnimateDesign = function ($main) {
    this.svgContainer = $main.find("#design-skill");
    if (this.svgContainer.length === 0) {
      return;
    }
    this.pen = this.svgContainer.find("#design-pen");
    this.penHeight = 40;
    this.penWidth = 82;
    this.penpoint = this.svgContainer.find("#pen-point");
    this.penpoint.css("opacity", "0");
    this.penpoint2 = this.svgContainer.find("#pen-point2");
    this.penpoint2.css("opacity", "0");
    this.heart = this.svgContainer.find("#design-line");
    this.heartPath = this.heart.find("#design-line-path")[0];

    if (!this.heartPath) {
      return;
    }
    this.pathobj = {
      length: 0,
      pathLength: this.heartPath.getTotalLength(),
    };

    this.pen.css("transform-origin", "-6px -19px 195px");
    this.timeLine = new TimelineMax({
      yoyo: true,
      paused: true,
      repeat: -1,
    })

      .to(this.penpoint, 0.4, {
        opacity: 1,
      })

      .to(this.pathobj, 2, {
        length: this.pathobj.pathLength,
        ease: Linear.easeNone,
        onUpdateScope: this,
        onUpdate: function () {
          this.heartPath.style.strokeDasharray = [
            this.pathobj.length,
            this.pathobj.pathLength,
          ].join(" ");

          var coords = this.heartPath.getPointAtLength(this.pathobj.length);

          coords.y = coords.y + 50;
          coords.x = coords.x - 50;
          this.pen.css(
            "transform",
            "translate(" + coords.x + "px, " + coords.y + "px) rotate(-45deg)"
          );
        },
      })
      .to(this.penpoint2, 0.4, {
        opacity: 1,
      });
    this.timeLine.play();
  };
});
