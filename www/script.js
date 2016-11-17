/* SCRIPT REMPLISSAGE DYNAMIQUE DE LA PAGE */
$(document).ready(function(){

  $.getJSON("data.json", function(data){

    var genre = "";
    var artiste = "";
    var couleurBack = "music_container blank";

    // Catégorie (musique / video)
    var categ = "";
    var styleContenu = "";

    if($("main span").attr('id').indexOf("music") >= 0 && $("main span").attr('id').indexOf("video") >= 0)
    {
      categ = "musique video";
    }
    else {
      if ($("main span").attr('id').indexOf("music") >= 0){categ = "musique";}
      else {
        categ = "video";
      }
    }

    // Style du contenu (RAP / ROCK)

    if ($("main span").attr('id').indexOf("rap") >= 0)
    {
      styleContenu = "Hip Hop";
    }
    else {
      if($("main span").attr('id').indexOf("rock") >= 0)
      {
        styleContenu = "Rock";
      }
      else {
        styleContenu = "";
      }
    }

    var stringConcat = "";
    // PArcours du fichier JSON
        $.each(data, function(typeMedia, item) {

        if(categ.indexOf(typeMedia) >= 0)
        {
            stringConcat += "<section class=\"" + typeMedia + "\">";

            $.each(item, function(titre,  valTitre){

              if(styleContenu == this.genre || styleContenu == "" ){
               $.each(valTitre, function(valueMusique, valMusique){
                   // GENRE
                   if(valueMusique == "genre" && genre != valMusique)
                   {
                     if(genre != "") {stringConcat += "</article>";}

                       stringConcat += "<h2>" + valMusique +"</h2>";
                       genre = valMusique;
                       couleurBack = "music_container blank";
                   }

                   // ARTISTE
                   if(valueMusique == "artiste")
                   {
                       if(artiste == "")
                       {
                           stringConcat += "<article class=\"" + couleurBack + "\">";
                           stringConcat += "<h3>" + valMusique + "</h3>";
                       }
                       else
                       {
                           if(artiste != "" && artiste != valMusique)
                           {
                               stringConcat += "</article>";
                               stringConcat += "<article class=\""+ couleurBack +"\">";
                               stringConcat += "<h3>" + valMusique + "</h3>";
                           }
                       }
                        artiste = valMusique;

                        // Changement couleur Background
                        if(couleurBack == "music_container blank")
                        {
                          couleurBack = "music_container";
                        }
                        else {
                          if(couleurBack == "music_container")
                          {
                            couleurBack = "music_container last";
                          }
                          else
                          {
                            couleurBack = "music_container blank";
                          }
                        }

                   }

                   // LIEN
                   if(valueMusique == "lien"){
                     if(categ == "musique"){
                        stringConcat += "<iframe  scrolling=\"no\" frameborder=\"no\" src=" + valMusique + "></iframe>";
                      }
                      else {
                        stringConcat += "<iframe src=\""+ valMusique +"\" frameborder=\"0\" allowfullscreen></iframe>";
                      }

                   }
               });
             }
            });


            stringConcat += "</section>";
            $("main").append(stringConcat);
            stringConcat = "";
          }
        });
    });
});



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
  $(".nav_a_01, .nav_a_02").hover(function(){
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

$(document).ready(function(){
  $(".hover_genre").hover(function(){
    $(this).addClass('hover_genre_active');
  }, function(){
    $(this).removeClass('hover_genre_active');
 });
});
