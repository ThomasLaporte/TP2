function loadingScreen() {
  document.body.removeChild(document.getElementById('item'));

  document.getElementById('wrapper').style.visibility = 'visible';
}

/*NAV RESPONSIVE ON SCROLLING*/

     $(function(){
   $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
          $('.btn_container').addClass("anim_btn");
      } else {
      $('.btn_container').removeClass("anim_btn");
      }
   });
 });

     $(function(){
   $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
          $('.btn_top').addClass("anim_btn");
      } else {
      $('.btn_top').removeClass("anim_btn");
      }
   });
 });

/*BTN BAS ON SCROLLING*/

$('.btn_top').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

     $(function(){
   $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
          $('.nav').addClass("fixed");
      } else {
      $('.nav').removeClass("fixed");
      }
   });
 });
    
     $(function(){
   $(window).scroll(function () {
      if ($(this).scrollTop() > 70) {
          $('.nav_a').addClass("fixed_a");
      } else {
      $('.nav_a').removeClass("fixed_a");
      }
   });
 });

/*BTN NAV*/

$(document).ready(function(){
  $(".nav_a_01").hover(function(){
    $(this).addClass('hover');
  }, function(){
    $(this).removeClass('hover');
 });
});

$(document).ready(function(){
  $(".nav_a_02").hover(function(){
    $(this).addClass('hover');
  }, function(){
    $(this).removeClass('hover');
 });
});

$(document).ready(function(){
  $(".nav_a_01").hover(function(){
    $(".i01").addClass('hover_a');
  }, function(){
    $(".i01").removeClass('hover_a');
 });
});
    
$(document).ready(function(){
  $(".nav_a_02").hover(function(){
    $(".i02").addClass('hover_a');
  }, function(){
    $(".i02").removeClass('hover_a');
 });
});
    
