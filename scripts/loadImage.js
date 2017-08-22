'use strict';
var images = ['duck.png','ninjavenge.png','bus-mall.png','salmon-cookie.png'];
var backgrounds = ['#background1', '#background2'];
var i = 2;
var hidden = 0;
var shown = 1;
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


setInterval(Carousel, 5000);
