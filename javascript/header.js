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

$(document).ready(function () {
  $('.btn-header').click(function () {
    if ($(".collapse").hasClass("show")) {
      $(".collapse").removeClass("show");
      $(".btn-navbar .navbar-toggler .navbar-toggler-icon").css({ "display": "none" })
    }
  });

  $('.btn-menu-header').click(function () {
    if ($(".navbar-toggler-icon").css("display") == "inline-block") {
      $(".navbar-toggler-icon").css({ "display": "none" })
      $(".img-close-header").css({ "display": "inline-block" })
    } else {
      $(".navbar-toggler-icon").css({ "display": "inline-block" })
      $(".img-close-header").css({ "display": "none" })
    }
  });
});
