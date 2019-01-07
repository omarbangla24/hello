$(window).on('load', function(){

    // Nav Hover
    $('ul li a').mouseenter(function(){
        $('li a').removeClass("nav-active");
        $(this).addClass("nav-active");
    });

    // Preloader
    $('#status').fadeOut();
    $('#preloder').delay(350).fadeOut();

 // Smooth Scroll
    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000 );
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;

            if ( sectionOffset <= scrollbarLocation ) {
                $(this).parent().addClass('nav-active');
                $(this).parent().siblings().removeClass('nav-active');
            }
        })

    });





});

