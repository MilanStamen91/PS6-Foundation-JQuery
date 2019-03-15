// shows and hides filtered items
$(".filter-simple-button").click(function() {
  var value = $(this).attr('data-filter');
  if(value === "all") {
    $('.filter-simple-item').show('1000');
  } else {
    $(".filter-simple-item").not('.'+value).hide('3000');
    $('.filter-simple-item').filter('.'+value).show('3000');
  }
});

// changes active class on filter buttons
$('.filter-simple-button').click(function () {
  $(this).siblings().removeClass('is-active');
  $(this).addClass('is-active');
});

// Menu-toggle button

//  $(document).ready(function() {
//   $(".menu-icon").on("click", function() {
//         $("nav ul").toggleClass("showing");
//   });
// });

// // Scrolling Effect

// $(window).on("scroll", function() {
//   if($(window).scrollTop()) {
//         $('nav').addClass('black');
//   }
//   else {
//         $('nav').removeClass('black');
//   }
// })

