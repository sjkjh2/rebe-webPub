$(document).ready(function(){

//header
function search(){
  //search 버튼을 클릭했을 때
  $('.search__open').click('click', function(){
    $('.search__form').stop().slideToggle(300);
    //키워드 slider
    $('.search__keyword__slider').bxSlider({
      wrapperClass:'search__keyword',
      auto:false,
      autoControls:false,
      pager:false,
      controls:true,
      moveSlides:1,
      nextSelector:'#search__keyword__next',
      prevSelector:'#search__keyword__prev',
      nextText:'',
      prevText:''
    });
  });
  //search__form 영역에서 벗어났을 때
  $('.search__form').on('mouseleave', function(){
    var width = $(window).width();
    if(width > 1024){
      $(this).stop().slideUp(300);
    };
  });
};
search();

var partners__slider =  $('.partners ul').bxSlider({
  wrapperClass:'partners__slider',
  auto:false,
  autoControls:false,
  pager:false,
  controls:false,
  slideWidth:400,
  slideMargin:10,
  maxSlides:6,
  minSlides:6,
  touchEnabled:false
});
$(window).on('load', function(){
});
$(window).on('resize', function(){
  var wid = $(window).width();
  if(wid < 1024){
    partners__slider.reloadSlider({
      wrapperClass:'partners__slider',
      auto:false,
      autoControls:false,
      pager:false,
      controls:false,
      slideWidth:400,
      slideMargin:10,
      maxSlides:3,
      minSlides:3,
      touchEnabled:true
    });
  }else if(wid < 768){
    partners__slider.reloadSlider({
      auto:false,
      autoControls:false,
      pager:true,
      controls:false,
      slideWidth:500,
      slideMargin:10,
      maxSlides:2,
      minSlides:2,
      touchEnabled:true
    });
  }else{
    partners__slider.reloadSlider({
      wrapperClass:'partners__slider',
      auto:false,
      autoControls:false,
      pager:false,
      controls:false,
      slideWidth:500,
      slideMargin:10,
      maxSlides:6,
      minSlides:6,
      touchEnabled:false
    });
  };
});

function gnb_pc(){
  //마우스가 gnb 호버 했을 때
  $('.gnb__list1').on('mouseenter keyup', function(){
    var width = $(window).width();
    if(width > 1024){
      $(this).parent().find('.gnb__list2').stop().fadeIn();
      $(this).parents('.gnb').addClass('on').slideDown();
      $(this).parents('.gnb').next('.dim').stop().fadeIn();
    };
  });
  //마우스가 gnb밖으로 나갔을 때
  $('.gnb').on('mouseleave', function(){
    $(this).find('.gnb__list2').stop().fadeOut(100);
    $(this).removeClass('on');
    $(this).next('.dim').stop().fadeOut(100);
  });
  //탭키가 나갔을 때 서브 메뉴 창 닫힘
  $('.gnb__list1:last-child .gnb__list2 li a').blur(function(){
    $(this).parents('.gnb__list1').children('.gnb__list2').fadeOut();
    $(this).parents('.gnb').removeClass('on');
    $(this).parents('.gnb').next('.dim').fadeOut();
  });
};
gnb_pc();

//모바일 gnb
var gnb_mobile = new Swiper('.gnb_mobile', {
  slidesPerView:'auto',
  freeMode:true
});

function mobile_menu(){
  //모바일 메뉴 오픈 버튼을 클릭하면
  $('.mobile_menu__open').on('click', function(){
    var box = $(this).next('.mobile_menu--box');
    box.fadeIn(200);
    box.next('.dim').fadeIn(200);
  });
  //모바일 메뉴가 열림
  $('.mobile_menu__close').on('click', function(){
    var box = $(this).parents('.mobile_menu--box');
    box.fadeOut(200);
    box.next('.dim').fadeOut(200);
  });
  //모바일 메뉴에 gnb를 클릭하면
  $('.mobile_gnb > li').on('click', function(){
    $(this).children('.mobile__sub--list2').stop().slideToggle();
    $(this).siblings().children('.mobile__sub--list2').stop().slideUp();
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    return false;
  });
};
mobile_menu();

//main
var location = new Swiper('.location_mobile', {
  slidesPerView:'auto',
  freeMode:true
});

function mobile_tabs(){
  $('.tabs > button').on('click', function(){
    $(this).toggleClass('on');
    $(this).siblings().stop().slideToggle();
  });
};
mobile_tabs();

function popup__agree(){ //약관보기 팝업
  var popup = $('.popup__agree'); 
  $('.costomer__clause button').on('click', function(){
    popup.fadeIn();
    popup.next('.dim').fadeIn();
  });
  $('.popup__agree .btn__close').on('click', function(){
    popup.fadeOut();
    popup.next('.dim').fadeOut();
  });
};
popup__agree();

function footer__tabs(){
  $('.footer__tabs > button').on('click', function(){
    $(this).next('ul').stop().slideToggle();
    $(this).stop().toggleClass('on');
  });
  $('.footer__tabs ul a').on('click', function(){
    var txt = $(this).text();
    var btn = $(this).parents('.footer__tabs').children('button');
    btn.text(txt);
    btn.removeClass('on');
    $(this).parents('ul').slideUp();
  });
};
footer__tabs();

function letter(){
  var open = $('.footer__letter--open');
  var close = $('.footer__letter--close');
  $(open).on('click', function(){
    $(this).siblings().stop().fadeIn(100); //형제들
    $(this).stop().fadeOut(100); //자신
  });
  $(close).on('click', function(){
    $(this).stop().fadeOut(100); //자신
    $(this).siblings().stop().fadeOut(100); //형제 팝업창
    $(this).parents('.footer__letter').children('.footer__letter--open').fadeIn(100);
  });
  // $('.letter__form select option[vale=""]').on('click', function(){
  //   var txt = $(this).text();
  //   console.log(txt);
  //   var btn = $(this).parents('.letter__form').find('input');
  //   btn.text(txt);
  // });
  $('.letter__form p > button').on('click', function(){
    var popup = $(this).parents('footer').prevAll('main').find('.costomer__popup');
    $(popup).fadeIn();
    $(popup).next('.dim').fadeIn();
  });
};
// letter();

});