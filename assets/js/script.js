$(window).on('load', function(){
    $('ul li a').mouseenter(function(){
        $('li a').removeClass("nav-active");
        $(this).addClass("nav-active");
    });

    $('#status').fadeOut();
    $('#preloder').delay(350).fadeOut();

});

