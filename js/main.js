$(document).ready(function(){

    var $menu = $("#menu");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && $menu.hasClass("fixed-top")) {
            $menu.addClass("fixed animated fadeIn");
        } else if( $(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed animated fadeIn").addClass("fixed-top");
        }
    });//scroll

    
        // $('.menu-gallery').slick({
        //   setting-name: setting-value
        // });
      

  

});

$(document).ready(function(){
    $('.menu-gallery').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        autoplaySpeed: 0,
        speed: 9000,
        cssEase: 'linear',
        nextArrow: false,
        prevArrow: false
    });
  });




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("topBtn").style.display = "block";
    } else {
      document.getElementById("topBtn").style.display = "none";
    }
  }
  

  function topFunction(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}






