$(document).ready(function(){

    const header = $('header');
    const headerBtn = $('header a.btn')

    // ANYTHING ON SCROLL
    $(window).scroll(() => {

        // Add class to header and button inside
        if($(window).scrollTop() > 100) {
            header.addClass('scrolled')
        } else {
            header.removeClass('scrolled')
        }

    })

    // GSAP

    // DevOps Solved
    let tl = gsap.timeline({
      scrollTrigger: {trigger: '#devops__solved', start: "10% bottom"}
    })
    
    tl.from("#devops__solved .container--small h2", { y: 20, opacity: 0, duration: 0.7})
    .from("#devops__solved .container--small p", { y: 20, opacity: 0, duration: 0.7}, "-=0.3")
    .from("#devops__solved .devops__benefits .devops__benefit", { y: 20, opacity: 0, duration: 1, stagger: 0.3}, "-=0.1")
    
    // About Us
    let tl1 = gsap.timeline({
      scrollTrigger: {trigger: '#about__us', start: "center bottom"}
    })
    
    tl1.from(".about__us--content-left figure", { x: -100, opacity: 0, duration: 1.5})
    .from(".about__us--content-right h2", { y: 30, opacity: 0, duration: 1}, "-=1.3")
    .from(".about__us--content-right p", { y: 30, opacity: 0, duration: 1}, "-=1")
        
    // DevOps Standards
    let tl2 = gsap.timeline({
      scrollTrigger: {trigger: '#devops__standards', start: "30% bottom"}
    })

    tl2.from("#devops__standards .container--small h2", { y: 20, opacity: 0, duration: 0.7})
       .from("#devops__standards .container--small p", { y: 20, opacity: 0, duration: 0.7}, "-=0.3")
       .from("#devops__standards .container--small a", { y: 40, opacity: 0, duration: 0.7}, "-=0.5")
       .from("#devops__standards .slick__slider .slick__slide", { y: 20, opacity: 0, duration: 1, stagger: 0.25}, "-=0.5")
    
    // Learn More
    let tl3 = gsap.timeline({
      scrollTrigger: {trigger: '#learn__more', start: "30% bottom"}
    })

    tl3.from("#learn__more h2", {opacity: 0, duration: 0.7})
       .from("#learn__more p", {opacity: 0, duration: 0.7}, "-=0.3")
       .from("#learn__more a", {opacity: 0, duration: 0.7}, "-=0.3")
        
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