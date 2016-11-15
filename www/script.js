function loadingScreen() {
  document.body.removeChild(document.getElementById('item'));

  document.getElementById('wrapper').style.visibility = 'visible';
}

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
    
$(document).ready(function(){
  $(".nav_a_01").hover(function(){
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
    $(this).addClass('hover');
  }, function(){
    $(this).removeClass('hover');
 });
});
    
$(document).ready(function(){
  $(".nav_a_02").hover(function(){
    $(".i02").addClass('hover_a');
  }, function(){
    $(".i02").removeClass('hover_a');
 });
});
    
