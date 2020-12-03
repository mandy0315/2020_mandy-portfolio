$(document).ready(function () {
    function getTimelineAn() {
        var scene = document.querySelector('.home-day-box');
        var mainTimeline = new TimelineMax();
        //
        var sun = scene.querySelectorAll('.home-day-sun img');
        var clouds = scene.querySelectorAll('.home-day-cloud-box .home-day-cloud img');

        mainTimeline
            .staggerFrom(sun, 2, { opacity: 0, ease: Back.easeOut },)
            .staggerFrom(clouds, 1.5, { opacity: 0, y: 100, ease: Back.easeOut }, 1);
    }
    getTimelineAn();

});