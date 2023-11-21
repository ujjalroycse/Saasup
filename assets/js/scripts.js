
AOS.init();
$(document).ready(function(){

    $('.click-menu').click(function(){
        $('.menu').fadeToggle('1000')
    })

    $(document).ready(function(){
        $('.popup-video').magnificPopup({
            type:'iframe'
        })
    });

    $('#testimonialSlide').owlCarousel({
        items:1,
        loop:true,
        dots:false,
        nav:true,
        navText:[`<i class="fa-solid fa-angle-left"></i>`,`<i class="fa-solid fa-angle-right"></i>`]
    })

    $('.counter-01').counterUp({
        delay:7,
        time:1000
    })
    $('.counter-02').counterUp({
        delay:10,
        time:1000
    })
    $('.counter-03').counterUp({
        delay:8,
        time:1000
    })
    $('.counter-04').counterUp({
        delay:6,
        time:1000
    })


    

    
})