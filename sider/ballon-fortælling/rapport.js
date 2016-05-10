$(document).ready(function() {
  clickImage();
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
