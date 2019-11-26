$(window).on('scroll', function(){
  var scr = $(window).scrollTop();
  // console.log(scr);
  if(scr > 285){
    $('.headerWrap').addClass('bg');
  }else{
    $('.headerWrap').removeClass('bg');
  }
});

$('.scrolltop').on('click', function(){
  $('body, html').animate({
    scrollTop:0
  }, 100);
  return false;
});

$('.footer_select button').on('click', function(){
    $(this).next().stop().slideToggle();
});
$('.footer_select a').on('click', function(){
  $(this).parents('.footer_select').children('ul').slideUp();
});