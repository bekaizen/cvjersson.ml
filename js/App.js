$(document).ready(function() {
    $('.btn-hamburger').click(function() {
        if ( $('#toggle-text').html() === 'CLOSE'  ) {
            $('.line').css({'transform':'rotate(0)', 'position': 'relative', 'top': '0px'});
            $('.line2').css({'display':'block'});
            $('.line3').css({'transform':'rotate(0)', 'position': 'relative', 'top': '0px'});
            $('#toggle-text').html('MENU');



            $('.hero-text').removeClass('backOutDown')
            $('.hero-text').addClass('backInUp')



            $('.in-menu-content').addClass('fadeOut')
            $('.in-menu-content').removeClass('fadeIn')

            $('.second-nav').removeClass('backInDown')
            $('.second-nav').addClass('backOutUp')

            $('.projects-container').addClass('fadeOutDown')
            $('.projects-container').removeClass('fadeInUp')



        } else {
            $('.line').css({'transform':'rotate(45deg)', 'position': 'absolute', 'top': '-8px'});
            $('.line2').css({'display':'none'});
            $('.line3').css({'transform':'rotate(-45deg)', 'position': 'absolute', 'top': '-8px'});
            $('#toggle-text').html('CLOSE');



            $('.hero-text').addClass('backOutDown')
            $('.hero-text').removeClass('backInUp')


            $('.in-menu-content').addClass('animated fadeIn')
            $('.in-menu-content').removeClass('fadeOut')
            $('.in-menu-content').css({'display':'block'})

            $('.second-nav').addClass('animated backInDown')
            $('.second-nav').removeClass('backOutUp')


            $('.projects-container').addClass('animated fadeInUp')
            $('.projects-container').removeClass('fadeOutDown')
        }
    })
})