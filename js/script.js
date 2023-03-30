$(document).ready(function(){

    $(window).scroll(function(){
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

     $('#banner_slider').owlCarousel({
          loop:true,
          margin:10,
          nav:false,
          autoplay:true,
          autoplayTimeout:3500,
          smartSpeed:600,
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:1
              }
          }
     });

     $('#testimonial').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout:4000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="fa-solid fa-arrow-left"></i>',
            '<i class="fa-solid fa-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            }
        }
    });

});