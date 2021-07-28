$('.navbar-light .navbar-nav .nav-link').on('click', function () {
    $('.navbar-light .navbar-nav .nav-link').removeClass('active');
    $(this).addClass('active');
    // if ($('.custom-navbar-collapse').hasClass('show')) {
    //     $('.custom-navbar-collapse').removeClass('show')
    //     $('.custom-button-navbar-toggler').removeClass('collapsed');
    //     $('.custom-button-navbar-toggler .fas.fa-bars').removeClass('hidden');
    //     $('.custom-button-navbar-toggler .fas.fa-times').addClass('hidden');
    //     $('.addition-class').addClass('hidden');
    //     $('#body').removeClass('hidden');
    //     $('footer').removeClass('hidden');
    // }
});
