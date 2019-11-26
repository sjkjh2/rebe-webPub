var slider1 = $('.slider').bxSlider({
  pager:false,
  wrapperClass:'visual_slide'
});

$('.visual .prev').on('click', function(){
  slider1.goToPrevSlide();
});
$('.visual .next').on('click', function(){
  slider1.goToNextSlide();
});

var slider2 = $('.slider2').bxSlider();

$('.business .controls .prev').on('click', function(){
  slider2.goToPrevSlide();
});
$('.business .controls .next').on('click', function(){
  slider2.goToNextSlide();
});

$(window).on('resize', function(){
  var wid = $(window).width();
  if(wid > 1200){
    //web
    respon(3, 303);
  }else if(wid < 1200){
    //mobile
    respon(1, 454);
  };
});

if(window.matchMedia("(min-width:1200px").matches){
  respon(3, 303);
}else if(window.matchMedia("(min-width:320px) and (max-width:1199px)").matches){
  respon(1, 454);
}

function respon($len, $wid){
  slider2.reloadSlider({
    pager:false,
    wrapperClass:'right',
    minSlides:$len,
    maxSlides:$len,
    slideWidth:$wid,
    slideMargin:33,
    moveSlides:1,
    infiniteLoop:true
  });
}