'use strict';
var images = ['duck.png','ninjavenge.png','bus-mall.png','salmon-cookie.png'];
var backgrounds = ['#background1', '#background2'];
var i = 2;
var hidden = 0;
var shown = 1;
var carouselInterval = 0;

// Carousel
function Carousel() {
  if (i === images.length) {
    i = 0;
  }
  $(backgrounds[shown]).animate({
    left: '-100%',
    width: '480px',
    height: '320px',
    margin: '20% 0px 0px 0px',
    opacity: '0'
  }, 3000, function() {
    $(backgrounds[shown]).css('left', '100%');
    // $(backgrounds[shown]).css('margin', '5% 0px 0px 0px');
    $(backgrounds[shown]).css('background-image', 'url(../images/' + images[i] + ')');
  });

  $(backgrounds[hidden]).animate({
    left: '50%',
    margin: '5% 0px 0px -460px',
    width: '960px',
    height: '640px',
    opacity: '1'

  }, 3000, function() {
    let temp;
    temp = hidden;
    hidden = shown;
    shown = temp;
    i++;
  });
}


function educationClick() {

  // Stop carousel
  if (carouselInterval) {
    $(backgrounds[0]).animate({ opacity: '0' }, 2000, function() {
      $(backgrounds[0]).css({
        'left': '100%',
        'width' : '480px',
        'height' : '320px',
        'margin' : '20% 0px 0px 0px',
      });
      $(backgrounds[0]).hide();
    });
    $(backgrounds[1]).animate({ opacity: '0' }, 2000, function() {
      $(backgrounds[1]).css({
        'left': '100%',
        'width' : '480px',
        'height' : '320px',
        'margin' : '20% 0px 0px 0px',
      });
      $(backgrounds[0]).hide();
    });
    $('aside').fadeIn('slow');
    clearInterval(carouselInterval);
    carouselInterval = 0;
  } else {
    // display project snapshots, remove home page text
    $(backgrounds[0]).show();
    $(backgrounds[1]).show();
    $('aside').fadeOut();

    // put first project to center
    $(backgrounds[shown]).animate({
      left: '50%',
      margin: '5% 0px 0px -460px',
      width: '960px',
      height: '640px',
      opacity: '1'

    }, 3000, function() {
      carouselInterval = setInterval(Carousel, 5000);
    });
  }

}

$('#projects').on('click', educationClick);
