$(document).ready(function () {
let AnimateDesign = function($main) {
    this.svgContainer = $main.find("#design-skill");
    if (this.svgContainer.length === 0) {
        return;
    }
    this.pen = this.svgContainer.find('#design-pen');
    this.penHeight = 40;
    this.penWidth = 82;
    this.penpoint = this.svgContainer.find('#pen-point');
    this.penpoint.css('opacity', '0');
    this.penpoint2 = this.svgContainer.find('#pen-point2');
    this.penpoint2.css('opacity', '0');
    this.heart = this.svgContainer.find('#design-line');
    this.heartPath = this.heart.find('#design-line-path')[0];

    if (!this.heartPath) {
        return;
    }
    this.pathobj = {
        length: 0,
        pathLength: this.heartPath.getTotalLength()
    }
    
    this.pen.css('transform-origin', '-6px -19px 195px');
    this.timeLine = new TimelineMax({
        yoyo: true,
        paused: true,
        repeat: -1
    })
    
    .to(this.penpoint, 0.4, {
        opacity: 1

    })

    .to(this.pathobj, 2, {
        length: this.pathobj.pathLength,
        ease: Linear.easeNone,
        onUpdateScope: this,
        onUpdate: function() {
            this.heartPath.style.strokeDasharray = [this.pathobj.length, this.pathobj.pathLength].join(' ');

            var coords = this.heartPath.getPointAtLength(this.pathobj.length);

            coords.y = coords.y + 50;
            coords.x = coords.x - 50;
            this.pen.css('transform', 'translate(' + coords.x + 'px, ' + coords.y + 'px) rotate(-45deg)');
        }
    })
    .to(this.penpoint2, 0.4, {
        opacity: 1

    });
    this.timeLine.play();
};

function DesignAnimation($main) {
    var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

    if(!is_firefox){  
        //firefox 31 bug
        new AnimateDesign($main);
    }
}
});