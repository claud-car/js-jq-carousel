$(document).ready(function() {
  var slideLeft = $('.prev');
  var slideRight = $('.next');
  var circleclick = $('.nav > i');


  slideRight.click(function() {
    moveRight();
  })

  slideLeft.click(function() {
    moveLeft();
  })

})








//FUNCTIONS
function moveRight() {
  var images = $('.images > img.active');
  var firstphoto = $('.images > .first');
  var lastphoto = $('.images > .last');
  var circle = $('.nav > i.active');
  var firstcircle = $('.nav > .first');
  var lastcircle = $('.nav > .last');

  if (images.hasClass('active') && images.hasClass('last') && circle.hasClass('active') && circle.hasClass('last')){
    firstphoto.addClass('active');
    images.removeClass('active');
    firstcircle.addClass('active');
    circle.removeClass('active');
  } else {
    images.next('img').addClass('active');
    images.removeClass('active');
    circle.next('i').addClass('active');
    circle.removeClass('active');
  }
}

function moveLeft(){
  var images = $('.images > img.active');
  var firstphoto = $('.images > .first');
  var lastphoto = $('.images > .last');
  var circle = $('.nav > i.active');
  var firstcircle = $('.nav > .first');
  var lastcircle = $('.nav > .last');

  if (images.hasClass('active') && images.hasClass('first') && circle.hasClass('active') && circle.hasClass('first')){
    lastphoto.addClass('active');
    images.removeClass('active');
    lastcircle.addClass('active');
    circle.removeClass('active');
  } else {
    images.prev('img').addClass('active');
    images.removeClass('active');
    circle.prev('i').addClass('active');
    circle.removeClass('active');
  }
}
