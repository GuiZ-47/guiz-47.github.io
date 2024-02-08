var audio=document.getElementById('audio_rickroll');
var img_troll = document.getElementById('img_troll')
var img_rick = document.getElementById('img_rick')
var first=true;
// Lancement de l'audio au clic n'importe où sur la page
window.addEventListener('mousedown',onmousedown);

function onmousedown(){
     if(first) {
          // Pour que la fonction ne puisse s'exécuter qu'une fois
          first=false;

          // La barre de lecture disparait au survol de l'image
          audio.classList.add("clicked");
          //L'image normale disparait au survol de l'image
          img_rick.classList.add("clicked");
          //L'image de troll apparait au survol de l'image
          img_troll.classList.add("clicked");

          //Lancement de l'audio
          audio.play();
     }
}


// Lancement de l'audio au clic sur le bouton de lecture
audio.addEventListener('play',play_button_pressed);

function play_button_pressed(){
     if(first) {
          // Pour que la fonction ne puisse s'exécuter qu'une fois
          first=false;

          // La barre de lecture disparait au survol de l'image
          audio.classList.add("clicked");
          //L'image normale disparait au survol de l'image
          img_rick.classList.add("clicked");
          //L'image de troll apparait au survol de l'image
          img_troll.classList.add("clicked");
     }
}

// On assigne pendant quelques secondes la classe .actif sur l'image qui a été cliquée, pour déclencher(sur mobile) ou faire persister après un hover(sur PC) l'image du troll
let timerTrollFace
function setActifClassTemporarily(lienCliqué) {
     // Pour éviter un clignotement de l'image au spam clic
     clearTimeout(timerTrollFace);
     lienCliqué.classList.add("actif");
     timerTrollFace = setTimeout(function() {lienCliqué.classList.remove("actif")}, 750);
}
