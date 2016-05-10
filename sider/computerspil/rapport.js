$(document).ready(function() {
  navbarPopdown();
  smoothScroll(300);
});

function navbarPopdown() {
  $(window).on("scroll", function() {
    var fromTop = $("body").scrollTop();
    if (fromTop > 200) {
      $('nav').css({
        'top':'0px'
      });
    } else {
      $('nav').css({
        'top':'-60px'
      });
    }
  });
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}


$('.menu-btn').click(function() {
  $('.overlay').fadeToggle(500);
  $('.bg-overlay').fadeToggle();
  $('.menu-btn').toggleClass('is-open');
});

$('.indhold h2 a').click(function() {
  $('.overlay').fadeToggle(500);
  $('.bg-overlay').fadeToggle();
  $('.menu-btn').toggleClass('is-open');
});
