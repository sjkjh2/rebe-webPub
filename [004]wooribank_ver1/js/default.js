function search(){
  //search 버튼을 클릭했을 때
  // $('.search__open').on('click', function(){
  //   $(this).next('.search__form').stop().slideToggle(200);
  // });
  // //search__form 영역에서 벗어났을 때
  // $('.search__form').on('mouseleave', function(){
  //   if($(this).height() < 222) {
  //     $(this).stop().slideUp(200);
  //   };
  // });
  //키워드 slider
  $('.search__slider').bxSlider({
    wrapperClass:'keyword'
  });
};
search();

function gnb_pc(){
  //마우스가 gnb 호버 했을 때
  var width = $(window).width();
  $('.gnb > ul > .gnb__list1').on('mouseenter keyup', function(){
    if(width > 1024){
      $(this).parent().find('.gnb__list2').stop().fadeIn(100);
      $(this).parents('.gnb').addClass('on').slideDown();
      $(this).parents('body').children('.dim').stop().fadeIn();
    };
  });
  //마우스가 gnb밖으로 나갔을 때
  $('.gnb').on('mouseleave', function(){
    if(width > 1024){
      $(this).find('.gnb__list2').stop().fadeOut(100);
      $(this).removeClass('on');
      $(this).parents('body').children('.dim').stop().fadeOut();
    };
  });
  //탭키가 나갔을 때 서브 메뉴 창 닫힘
  $('.gnb__list1:last-child .gnb__list2 li a').blur(function(){
    $(this).parents('.gnb__list2').fadeOut();
    $(this).parents('.gnb').removeClass('on');
    $(this).parents('body').children('.dim').fadeOut();
  });
};
gnb_pc();

function mobile_menu(){
  //모바일 메뉴 오픈 버튼을 클릭하면
  $('.mobile_menu__open').on('click', function(){
    $(this).next('.mobile_menu--box').fadeIn(200);
  });
  //모바일 메뉴가 열림
  $('.mobile_menu__close').on('click', function(){
    $(this).parents('.mobile_menu--box').fadeOut(200);
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

function mobile_tabs(){
  var width = $(window).width();
  if(width < 1024){//브라우저 창이 1024보다 작으면
    $('.tabs > button').on('click', function(){
      $(this).siblings('ul').stop().slideToggle(150);
      $(this).toggleClass('on');
    });
    $('.tabs > ul a').on('click', function(){
      var txt = $(this).text();
      var btn = $(this).parents('.tabs').children('button');
      btn.text(txt);
      btn.removeClass('on');
      $(this).parents('ul').slideUp(150);
      return false;
    });
  };
};
mobile_tabs();

function popup(){ //약관보기 팝업
  var popup = $('.costomer__popup'); 
  $('.costomer__clause button').on('click', function(){
    popup.fadeIn();
    popup.next('.dim').fadeIn();
  });
  $('.costomer__popup .btn__close').on('click', function(){
    popup.fadeOut();
    popup.next('.dim').fadeOut();
  });
};
popup();

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
letter();