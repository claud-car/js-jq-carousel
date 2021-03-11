// Creare uno slider di immagini: potete usare le immagini
// che desiderate. Per facilitarvi la vita usate immagini
// delle stesse dimensioni :faccia_leggermente_sorridente:
// Lo slider prevederà due frecce (icone) che permettono
//  di scorrere tra le immagini dello slider In oltre per
//   scorrere le immagini permettere anche l’uso delle frecce
//    sinistra e destra della tastiera Utiliziamo una classe
//    first e last per capire quali sono la prima e ultima
//    immagine dello slider Utilizziamo una classe active per
//     aiutarci a capire quale è l’immagine attuale da
//     visualizzare nello slider
// BONUS
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
//  Generiamo i pallini con JS
// Consigli del giorno:
// Come sempre è importante usare la documentazione di
// jQuery per scoprire/rinfrescare memoria sulle funzioni
// che potrebbero esserci utili.

$(document).ready(function() {
  slideRight.click(function() {
    moveRight();
  })

  slideLeft.click(function() {
    moveLeft();
  })

})

var slideLeft = $('.prev');
var slideRight = $('.next');


function moveRight() {
  var images = $('.images > img.active');
  var firstphoto = $('.images > .first');
  var lastphoto = $('.images > .last');

  if (images.hasClass('active') && images.hasClass('last')) {
    firstphoto.addClass('active');
    images.removeClass('active');
  } else {
    images.next('img').addClass('active');
    images.removeClass('active');
  }
}

function moveLeft(){
  var images = $('.images > img.active');
  var firstphoto = $('.images > .first');
  var lastphoto = $('.images > .last');

  if (images.hasClass('active') && images.hasClass('first')){
    lastphoto.addClass('active');
    images.removeClass('active');
  } else {
    images.prev('img').addClass('active');
    images.removeClass('active');
  }
}




// function slideRight(){
//   slideRight.click(function () {
//     var source = images.attr('src');
//
//     if (source == 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg') {
//       images.attr("src","https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg");
//     } else if (source == "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg") {
//       images.attr("src", "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg");
//     } else if (source == "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg"){
//       images.attr("src", "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg");
//     } else {
//       images.attr("src", "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg")
//     }
//   })
// }

// function slideLeft(){
//   slideLeft.click(function () {
//     var source = images.attr('src');
//
//     if (source == "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg") {
//       images.attr("src", "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg");
//     } else if (source == "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg") {
//       images.attr("src", "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg");
//     } else if (source == "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg"){
//       images.attr("src","https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg" );
//     } else {
//       images.attr("src", "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg");
//     }
//   })
//
// }


// PRIMA FOTO "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=clouds-country-daylight-371633.jpg&fm=jpg"
// SECONDA FOTO "https://static.photocdn.pt/images/articles/2017/04/28/iStock-646511634.jpg"
// TERZA FOTO "https://cdn.mos.cms.futurecdn.net/FUE7XiFApEqWZQ85wYcAfM.jpg"
// QUARTA FOTO "https://static.photocdn.pt/images/articles/2017/04/28/iStock-546424192.jpg"
