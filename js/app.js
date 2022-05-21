$(document).ready(function(){

    const header = $('header');
    const headerBtn = $('header a.btn')

    // ANYTHING ON SCROLL
    $(window).scroll(() => {

        // Add class to header and button inside
        if($(window).scrollTop() > 100) {
            header.addClass('scrolled')
            headerBtn.addClass('btn-turquoise')
        } else {
            header.removeClass('scrolled')
            headerBtn.removeClass('btn-turquoise')
        }

    })
        
    // Slick Slider
    $('.slick__slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<figure class="slick-prev slick-arrow"><img src="./img/prev.svg" alt="Previous"></figure>',
        nextArrow: '<figure class="slick-next slick-arrow"><img src="./img/next.svg" alt="Next"></figure>',
        responsive: [
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    }); 

    // Add current year to footer
    $('footer small').html('Copyright &copy; ' + (new Date).getFullYear() );

});