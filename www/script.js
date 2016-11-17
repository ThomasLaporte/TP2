/* SCRIPT REMPLISSAGE DYNAMIQUE DE LA PAGE */
$(document).ready(function(){

  $.getJSON("data.json", function(data){

    var genre = "";
    var artiste = "";
    var couleurBack = "music_container blank";


    var typeContenu = "";
    var styleContenu = "";

    // Catégorie (musique / video)
    if($("main span").attr('id').indexOf("music") >= 0 && $("main span").attr('id').indexOf("video") >= 0)
    {
      typeContenu = "musique video";
    }
    else {
      if ($("main span").attr('id').indexOf("music") >= 0){typeContenu = "musique";} else {typeContenu = "video"; }
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
    // Parcours du fichier JSON

    // Noeud correspondant à musique ou video
        $.each(data, function(typeMedia, item) {

        if(typeContenu.indexOf(typeMedia) >= 0)
        {
            stringConcat += "<section class=\"" + typeMedia + "\">";

            // noeud correspondant à clip... et titre...
            $.each(item, function(titre,  valTitre){
             var titreMusique = "";

              if(styleContenu == this.genre || styleContenu == "" ){
                // noeud correspondant aux valeurs "Genre", "Artiste", "Titre" et "URL"
               $.each(valTitre, function(categorieName, categorieValue){
                   // GENRE
                   if(categorieName == "genre" && typeContenu != categorieValue)
                   {
                     if(typeContenu != "") {stringConcat += "</article>";}

                       stringConcat += "<h2>" + categorieValue +"</h2>";
                       typeContenu = categorieValue;
                       couleurBack = "music_container blank";
                   }

                   // ARTISTE
                   if(categorieName == "artiste")
                   {
                       if(artiste == "")
                       {
                           stringConcat += "<article class=\"" + couleurBack + "\">";
                           stringConcat += "<h3>" + categorieValue + "</h3>";
                       }
                       else
                       {
                           if(artiste != "" && artiste != categorieValue)
                           {
                               stringConcat += "</article>";
                               stringConcat += "<article class=\""+ couleurBack +"\">";
                               stringConcat += "<h3>" + categorieValue + "</h3>";
                           }
                       }
                        artiste = categorieValue;

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
                   // Si un titre existe sur le contenu, on le stock
                    if(categorieName == "titre"){
                      titreMusique = categorieValue;
                    }

                   // LIEN
                   if(categorieName == "lien"){
                     // Si c'est une musique Soundcloud
                     if(typeContenu == "musique"){

                       if(titreMusique != "") {stringConcat += "<div style=\"display:inline-block;\"><p>" + titreMusique + "</p>";}
                        stringConcat += "<iframe  scrolling=\"no\" frameborder=\"no\" src=" + categorieValue + "></iframe></div>";
                      }
                      else {
                        stringConcat += "<iframe src=\""+ categorieValue +"\" frameborder=\"0\" allowfullscreen></iframe>";
                      }

                   }
               });
             }
            });


            stringConcat += "</section>";
            // Ajout de l'ensemble du contenu à la page dans les balises <main>
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
