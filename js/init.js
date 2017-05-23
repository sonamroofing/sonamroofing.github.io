(function ($) {

  $(document).ready(function () {

    /* Add Classes to DOM elements for styling purpose */
    // star icon to the services list
    $('.services-short-list h5').addClass('fa fa-star');


    // Toggle active rows styles for the prices table.
    $('article table tr').click(function () {
      $(this).toggleClass('act');
    });


    /* DOM Manipulations */
    // put slider text into the grid.
    var slider_caption = $('.metaslider .caption');
    slider_caption.addClass('container').wrapInner('<div class="column"></div>');


    // Menu dropdown.
    var menu_item = $('.main-menu li');
    menu_item.mouseenter(function () {
      $(this).addClass('act').find('>ul').stop(false, true).slideDown(300);
    });
    menu_item.mouseleave(function () {
      $(this).removeClass('act').find('>ul').stop(false, true).fadeOut(300);
    });


    /* Initialize external plugins */
    // Owl Carousel for Services.
    $(".services-carousel").owlCarousel({
      items: 4,
      navigationText: [
        "<i class='fa fa-chevron-left'></i> <span>prev</span>",
        "<i class='fa fa-chevron-right'></i> <span>next</span>"
      ],
      navigation: true,
      autoPlay: false
    });

    // Owl Carousel for Testimonials.
    $(".testimonials-carousel").owlCarousel({
      navigation: true,
      slideSpeed: 300,
      paginationSpeed: 400,
      singleItem: true
    });

    // Prettyphoto popup.
    // disable on mobile.
    if ($(window).width() > 768) {
      $("a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'normal',
        overlay_gallery: true
      });
    }


    // Isotope for the Portfolio.
    var container = $('.isotope'),
      filterLinks = $('#filter-by a');

    filterLinks.click(function (e) {
      var selector = $(this).attr('data-filter');
      container.isotope({
        filter: '.' + selector,
        itemSelector: '.isotope-item',
        layoutMode: 'fitRows',
        animationEngine: 'best-available'
      });

      filterLinks.removeClass('active');
      $('#filter-by li').removeClass('current-cat');
      $(this).addClass('active');
      e.preventDefault();
    });


    // Mobile menu call on mobile devices.
    if ($(window).width() < 768) {
      $('nav#menu_mobile').mmenu();
    }

  });

  $('window').load(function () {

    $('.flex-control-nav a').remove().wrapInner('<span></span>');

  })

})(jQuery);