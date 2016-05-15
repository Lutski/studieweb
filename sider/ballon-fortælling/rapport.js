$(document).ready(function() {
  clickImage();
  sassOrCSS();
});

var imageIsZoomed = false;

function clickImage() {
  $('.image-wrapper').click(function() {
    if (imageIsZoomed === false) {
      $(this).addClass('show-image');
      imageIsZoomed = true;
    } else {
      $(this).removeClass('show-image');
      imageIsZoomed = false;
    }
  });
}


function sassOrCSS() {
  function sassTocssToggle() {
    $('.sass').toggleClass('is-gone');
    $('.css').toggleClass('is-gone');
    $('.sass-btn').toggleClass('sass-css-btn-is-on');
    $('.css-btn').toggleClass('sass-css-btn-is-on');
  }

  $('.css-btn').click(function() {
    sassTocssToggle();
  });
  
  $('.sass-btn').click(function() {
    sassTocssToggle();
  });
}
