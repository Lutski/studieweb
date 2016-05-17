$(document).ready(function() {
  clickImage();
  sassOrCSS();
  imageSlider();
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


function imageSlider() {
  var imageAndcommentArray = [["Første sketch", "billeder/sketch-1.jpg"], ["Anden sketch", "billeder/sketch-2.jpg"], ["Tredje og sidste sketch", "billeder/sketch-3.jpg"]];
  var imageNumber = 0;
  var currentComment = imageAndcommentArray[imageNumber][0];
  var currentImage = imageAndcommentArray[imageNumber][1];

  function setImageAndComment() {
    $('.current-image-comment').html(currentComment);
    $('.current-image').attr("src", currentImage);
  }

  $('.next').click(function() {
    imageNumber += 1;
    if (imageNumber > imageAndcommentArray.length - 1) {
      imageNumber = 0;
    }
    currentComment = imageAndcommentArray[imageNumber][0];
    currentImage = imageAndcommentArray[imageNumber][1];
    setImageAndComment();
  });

  $('.prev').click(function() {
    imageNumber -= 1;
    if (imageNumber < 0) {
      imageNumber = imageAndcommentArray.length - 1;
    }
    currentComment = imageAndcommentArray[imageNumber][0];
    currentImage = imageAndcommentArray[imageNumber][1];
    setImageAndComment();
  });

  setImageAndComment();
}
