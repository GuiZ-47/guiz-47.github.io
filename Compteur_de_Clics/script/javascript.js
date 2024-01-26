// Un petit compteur de clic rigolo, pour s'exercer aux boucles et conditions en JavaScript.

let Compteur = document.getElementById('nb_compteur');
let Bouton = document.getElementById('bouton_compteur')
let NbDeClics = 0
let NbDeClicsTotal = 0

//fonction "onclick" sur le bouton
function compteurIncrement(){
	NbDeClics ++;
	NbDeClicsTotal ++;
	Compteur.textContent = NbDeClics;
	changecolor();
	// Compteur.innerHTML = NbDeClics; // ".innerHTML" peut être un vecteur d'attaque on évitera de l'utiliser pour insérer du texte.
	// Bouton.addEventListener("click", compteurIncrement); soit on utilise add.EventListener, soit on met un attibut "onclick" sur la balise dans le html
};

		////////////////////////////// fonction changecolor() ////////////////////////////

let sectionCompteur = document.getElementById('compteur');
let Stop = document.getElementById('stop_compteur');
let body = document.querySelector('body');


// Tableau des sources des images
let lienImages = [
	"images/Stop_panneau.png",
	"images/Cute_Eyes.png",
	"images/stop_clic.jpg",
	"images/teka.jpg",
	"images/broken-screen.jpg",
	]

//Création des balises <img>
let images =[]
lienImages.forEach(function(lien,index) {
	images[index] = document.createElement("img")
	images[index].src = lien
})

// Tableau des sources audio
let lienAudio = [
	"audio/monster-roar.mp3",
	"audio/glass-break.mp3",
	]

// Création des pistes audios prêtes à l'emploi
let audio =[]
lienAudio.forEach(function(lien,index) {
	audio[index] = document.createElement("audio")
	audio[index].src = lien
})

function changecolor() {
	if (NbDeClics ==1 ) {
		Compteur.classList.add("nb_compteur_1-4");
		sectionCompteur.removeChild(images[4])
	} 
	else if (NbDeClics == 5) {
		Compteur.classList.add("nb_compteur_5-9");
	}
	else if (NbDeClics == 10) {
		Compteur.classList.add("nb_compteur_10-14");
	}
	else if (NbDeClics == 15) {
		Compteur.classList.add("nb_compteur_15-19");
		Stop.textContent = "STOP ?";
		Stop.classList.add("stop_compteur_15-19");
	}
	else if (NbDeClics == 20) {
		Compteur.classList.add("nb_compteur_20-24");
		Stop.textContent = "STOP !";
		Stop.classList.add("stop_compteur_20-24");
		sectionCompteur.appendChild(images[0])
	}
	else if (NbDeClics ==25) {
		sectionCompteur.replaceChild(images[1], images[0])
		Compteur.classList.add("nb_compteur_24-29");
		Stop.textContent = "💚 Merci de ne pas cliquer sur le bouton 💚";
		Stop.classList.add("stop_compteur_25-29");
		Bouton.textContent ="Ne pas cliquer ici";
	}
	else if (NbDeClics ==30) {
		sectionCompteur.replaceChild(images[4], images[1]);
		images[4].style.transform ="translate(100vw)"; // On remplace l'image mais on la décale pour ne pas l'afficher toute de suite à l'écran
		body.classList.add("background_stop"); // ajout d'un background via l'ajout d'une class/
		Compteur.classList.add("nb_compteur_30-34");
		Stop.textContent = "";
		Bouton.classList.add("opacity_bouton");
		audio[0].play(); //Effet sonore de grognement 
	}

	else if (NbDeClics == 35) {
	    if (images[4].requestFullscreen) {
	      images[4].requestFullscreen();
	    }
	    else if (images[4].msRequestFullscreen) {
	      images[4].msRequestFullscreen();
	    }
	    else if (images[4].mozRequestFullScreen) {
	      images[4].mozRequestFullScreen();
	    }
	    else if (images[4].webkitRequestFullScreen) {
	      images[4].webkitRequestFullScreen();
    	};
    	audio[1].play(); //Effet sonore d'écran brisé

    	//Reset du compteur
    	Bouton.textContent ="Continuer ?";
    	Compteur.textContent ="";
    	Stop.className = "";
    	Bouton.className = "";
    	Compteur.className = "";
  		body.className ="";
  	}

  	else if (NbDeClics == 36) {
    	Compteur.textContent ="";
  		NbDeClics = 0;
  		Bouton.textContent ="Cliquez !";
  	}
}

///////////////////// Reset du compteur //////////////////////////////




// idées pour améliorerla page :
// -ajouter un compteur d'APM (clic/min) à la sortie du plein écran
// -afficher un compteur de nb d'écrans cassés & nb de clics total à partir de la 2ème boucle


