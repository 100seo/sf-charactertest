const loader = $('.loading');
const html = $('html');

html.css({'overflow' : 'hidden'}); //로딩 중 스크롤 방지

$(window).on('load', ()=>{

     setTimeout(() => { //  <-* 로딩속도 구현
    
    loader.fadeOut(300);  
    html.css({'overflow' : 'auto'}); //스크롤 방지 해제
    
  });  //  <-* 로딩속도 구현

})