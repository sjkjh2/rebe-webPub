$(document).ready(function(){  //문서가 준비가 되면 js가 실행을 함.
  
  var slider1 = $('.slider').bxSlider({
    auto:true, //자동재생
    pause:5000, //자동재생 머무는 시간
    // pager:false //페이지 유무
    speed:100,//슬라이드 이동속도
    slideWidth:400,
    minSlides:2,
    maxSlides:4,
    moveSlides:1, //몇개씩 이동할지
    wrapperClass:'slider_box1'//부모 클래스명을 재정의
  });

  //bxslider 사이트에서 참고
  $('.stop').on('click', function(){
      slider1.stopAuto();
      $(this).hide();
      $(this).next().show();

  });
  $('.start').on('click', function(){
      slider1.startAuto();
      $(this).hide();
      $(this).prev().show();
  });

  var slider2 = $('.slider2').bxSlider({
    wrapperClass:'slider_box2', //부모클래스명 재정의
    pager:true,
    pagerCustom:'.paging' //페이지커스텀 원하는 부모 선택
  });

  var slider3 = $('.slider3').bxSlider({
    wrapperClass:'slider_box3', //부모클래스명 재정의
    pager:true,
    pagerCustom:'.paging2' //페이지커스텀 원하는 부모 선택
  });

  var slider4 = $('.slider4').bxSlider({
  });
  $('.open').on('click', function(){
    $('.in_slide').show();
    // slider4.reloadSlider();
  });

  var slider5 = $('.slider5').bxSlider({
    slideWidth:400,
    minSlides:3,
    maxSlides:3
  });
  
  $(window).on('resize', function(){
    var wid = $(window).width();
    if( wid > 1024 ){
      slider5.reloadSlider({
        slideWidth:400,
        minSlides:5,
        maxSlides:5
      });
    }else if( wid < 1024 ){
      slider5.reloadSlider({
        slideWidth:400,
        minSlides:2,
        maxSlides:2
      });
    };
  });

    
  // $(window).on('resize', function(){
  //   var wid = $(window).width();
  //   if( wid > 1024 ){
  //     win1(5, 400);
  //   }else if( wid < 1024 ){
  //     win1(2, 600);
  //   }
  // });

  // if( window.matchMedia("(min-width:400px) and (max-width:800px)").matches){
  //   win1(3, 500);
  // }

  // function win1($min, $wids){
  //   slider5.reloadSlider({
  //     minSlides:$min,
  //     maxSlides:$min,
  //     slideWidth:$wids
  //   });
  // };

});