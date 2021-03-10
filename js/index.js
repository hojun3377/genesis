const Slider = (function() {
    var i = 0;
    var timer;
    var sliderContent;

    function iSwitch(element, directionFlag) {
        var current = i;
        i = directionFlag ? ((++i > 2) ? 0 : i) : ((--i < 0) ? 2 : i);
        element[current].style.opacity = '0';
        element[i].style.opacity = '1';
    }

    return {
        init: function() {
            sliderContent = document.getElementsByClassName('slider-content');
        },
        auto: function() {
            timer = setInterval(() => {iSwitch(sliderContent, 1)}, 4000);
        },
        left: function() {
            var left = document.getElementById('left');

            left.addEventListener('click', () => {
                iSwitch(sliderContent, 0);
            });
        },
        right: function() {
            var right = document.getElementById('right');

            right.addEventListener('click', () => {
                iSwitch(sliderContent, 1);
            });
        } 
    }
})();

window.addEventListener('load', () => {
    Slider.init();
    Slider.auto();
    Slider.left();
    Slider.right();
})