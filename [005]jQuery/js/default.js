$(document).ready(function(){  //문서가 준비가 되면 js가 실행을 함.
  // $('.btn').on('click', function(){
  //   // $('body').css('background', 'pink')
  //   $('body').addClass('on');
  // });
  // $('.btn2').on('click', function(){
  //   $('body').removeClass('on');
  // });

  // $('.btn').on('click', function(){
  //   $('.menu').toggleClass('on');
  // });
    $('.btn').on('click', function(){
    // $('body').css('background', 'pink')
    $('.menu').addClass('on');
  });
  $('.btn2').on('click', function(){
    $('.menu').removeClass('on');
  });


  $('.btn_popup').on('click', function(){
    $('.popup').fadeIn();
    $('.dim').fadeIn();
  });
  $('.popup .close').on('click', function(){
    $('.popup').fadeOut();
    $('.dim').fadeOut();
  });

  function tab(){
    $('.tabs .tab li').on('click', function(){
      var idx = $(this).index(); //클릭한 나 자신이 몇번째인지
      // console.log(idx); //콘솔에서 보여줌
      var div = $(this).parent('ul').siblings('div').eq(idx);

      $(this).siblings().removeClass('on'); //나 자신을 제외한 나머지 형제들 한테 클래스를 지워줌
      $(this).addClass('on'); //클릭한 자신한테 클래스를 줌

      div.addClass('on'); //나 자신의 부모 ul을 제외한 나머지 형제 div의 변수에 찾아가 클래스 on을 실행
      div.siblings('div').removeClass('on'); //나 자신을 제외한 나머지 형제들 클래스를 지워줌

      return false; //a 링크의 새로고침이 안되게 함.
    });
    
    // index >> 내가 몇벉인지
    // eq >> 몇번째로 선택

  };
  tab(); //함수식을 실행

  function faq(){
    var li = $('.faq > ul > li');
    li.on('click', function(){
      // $(this).children('div').slideDown(300); //자신의 자식 을 찾아가 내려옴
      $(this).children('div').stop().slideToggle(300); //클릭한 만큼 무빙을 없앨라면 stop추가
      $(this).siblings().children('div').slideUp(300); //나를 제외한 나머지 형제는 올라감
      // div div { find }
      // div > div { children }

      $(this).toggleClass('on')
      // $(this).addClass('on');
      $(this).siblings('li').removeClass('on');

      return false;
    });
  };
  faq();

  function lnb(){
    var li = $('.lnb > li');

    // keyyp 키보드가 왔을 때 포커스가 됐을 때
    li.on('mouseenter keyup', function(){ //메뉴에 마우스를 올렸을때
      $(this).addClass('on');
      $(this).siblings('li').removeClass('on');
    });
    li.on('mouseleave', function(){ //마우스가 빠져 나갔을 때 메뉴가 사라짐 내 자신이 밖으로 나갔을 때
      $(this).removeClass('on');
    });
  };
  lnb();

  function select(){
    $('.select button').on('click', function(){
      $(this).next().stop().slideToggle();
      $(this).toggleClass('on');
      //next 다음 형제
    });
    $('.select a').on('click', function(){ //a를 클릭했을 떼
      var txt = $(this).text(); //클릭한 글씨를 변수에 담음
      // console.log(txt); //콘솔 로그에서 확인
      var btn = $(this).parents('.select').children('button')

      btn.text(txt); //a의 최상위 조상 select로 찾아서 그 자식의 버튼에게 text를 뿌려줌
      btn.removeClass('on'); //a를 클릭하면 화살표가 다시 돌아감.
      $(this).parents('ul').slideUp(); //a를 선택하면 그 조상 ul이 슬라이드업이 됨
      return false;
    });
  };
  select();

  function rwd(){
    $('.rwd').on('click', function(){
      var width = $(window).width();
      console.log(width);
      if(width > 1024){ //브라우저 가로사이즈 크기 > 내가 정한 기준의 가로사이즈
        $('body').css('background', 'pink');
      }else{ //조건식
        $('body').css('background', 'violet');
      }
    });

    $(window).on('resize', function(){
      var width = $(window).width();
      // console.log(width);
      if(width > 1024){ //브라우저 가로사이즈 크기 > 내가 정한 기준의 가로사이즈
        $('body').css('background', 'pink');
      }else{ //조건식
        $('body').css('background', 'violet');
      }
    });
  };
  rwd();


  function top(){
    $('.top').on('click', function(){
      $('html').animate({
        scrollTop:0
      }, 200);
    });

  };
  top();

  // function scroll(){
  //   $(window).on('scroll', function(){ //윈도우에서 스크롤을 움직이면
  //     var src = $(this).scrollTop();
  //     console.log(src);
  //     if(src > 200){ //만약에 200보다 크면
  //       $('header').addClass('fix') //header에 클래스 fix 추가
  //     }else{ //200보다 작으면
  //       $('header').removeAttr('class'); //클래스가 사라짐
  //     }
  //   });
  // }
  // scroll();

  function scroll(){
    $(window).on('scroll', function(){ //윈도우에서 스크롤을 움직이면
      $('section.box').each(function(){ //each 반복문
        var ele = $(this).offset().top + //박스의 위치값
        $(this).height(); //박스의 높이
        var src = $(window).scrollTop() + $(window).height(); // 스크롤 바 위쪽 + 화면의 높이
        var scr_top = $(window).scrollTop();

        if(ele < src){
          $(this).addClass('on');
          $(this).siblings('.box').removeClass('on'); //양방향 애니메이션
        }
        if( scr_top == 0 ){
          $('section.box').removeClass('on'); //양방향 애니메이션
        }
      });
    });

    $(window).on('scroll', function(){
      // a=전체 문서의 높입, b=현재 화면의 높이, c=스크롤의 위치
      // (c/(a-b))*100=전체의 %위치인지
      var doc_height = $(document).height(); //문저 전체의 높이
      var height = $(window).height(); //현재 화면의 높이
      var src = $(window).scrollTop(); //스크롤의 위치
      var result = (src / (doc_height - height)) *100;
      var num = Math.round(result);

      $('.bar').css('width', num + '%');
      console.log(num);
    });

  }
  scroll();
  
  function agent() {
    var agent = navigator.userAgent;
    if( agent.math(/iPoone | iPad /)){ //만약에 사용자 기기가 애플이면
      $('head').append('<link rel="stylesheet" href="ios.css">'); //애플에 대응
    }else{
      $('head').append('<link rel="stylesheet" href="android.css">');
    }
    console.log(agent);
  }
  agent();


});