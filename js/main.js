jQuery(document).ready(function($){

    var parallax = document.getElementById("outer");
    //    var speed = -2;
    var speed = document.getElementById("outer").getAttribute("data-parallax");

    window.onscroll = function() {
        var yOffset = window.pageYOffset;
        parallax.style.backgroundPosition = "0 " + (yOffset / speed) + "px";


        //        console.log($('.timeline-section').offset().top, yOffset);

    }

    jQuery.scrollSpeed(100, 800);

    new WOW().init();




});
