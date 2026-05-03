$(document).ready(function() {

sliderGallery.init();

// Карусель кейов    
    $('.cases_carousel').owlCarousel({
        items:3,
        responsive:{
            360: {
                items:1
            },
            768: {
                items:2
            },
            1440:{
                items:3
            }},        
        margin: 0,
        loop:true,
        dots: true,
        nav:true,
        navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    
// FAQ аккордеон
    $('.question > .header').click(function() {
        if($(this).children('.icon').text() === '+') {
            $(this).parent().addClass('question_expand');
            $(this).children('.title').addClass('question_title_expand');
            $(this).children('.icon').addClass('question_icon_expand').text('—');
        } else {
            $(this).parent().removeClass('question_expand');
            $(this).children('.title').removeClass('question_title_expand');
            $(this).children('.icon').removeClass('question_icon_expand').text('+');
        };
        $(this).next().toggle('fast');
    });

    $('.icon_menu').click(function() {
        $('.menu_block').css('display', 'flex');
        $('.icon_close').css('display', 'block');
    });

    $('.icon_close').click(function() {
        $('.menu_block').css('display', 'none');
        $('.icon_close').css('display', 'none');
    });


    
})
