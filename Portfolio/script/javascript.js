//-------------------- Burger de navigation de la version mobile ---------------------

let boutonMenuBurger = document.querySelector("#bouton_menu_burger");
let menuBurger = document.querySelector("#menu");

boutonMenuBurger.addEventListener("click", function(){
	menuBurger.classList.toggle("ouvert");
});

// Liste de tout les boutons de catégories dans le menu burger
let sousSectionBurger = document.querySelectorAll("#menu > li")

// Gestion de l'ouverture/fermeture des catégories "onclick" et en fonction des catégories déjà ouvertes 
sousSectionBurger.forEach(function(element){
	element.addEventListener("click", function(){
		// Si on clique sur l'intitulé d'une catégorie déjà ouverte on la referme, mais pas si on clique sur un autre élément de cette catégorie
		if (event.target.parentElement.classList.contains("ouvert")) {
			element.classList.remove("ouvert");
		}
		// Si on clique sur une catégorie fermée, alors on ferme toute les catégories avant d'ouvrir celle ciblée (il ne peut pas y avoir 2 catégories ouvertes en même temps avec cette méthode)
		else{
			sousSectionBurger.forEach(function (item) {
			item.classList.remove("ouvert");
			});
			element.classList.add("ouvert");
		};
	});
});

// ------------------------------------ liens vers mes réseaux sociaux--------------------------------

// On assigne pendant quelques secondes la classe .actif sur le lien qui a été cliqué, pour déclencher(sur mobile) ou faire persister après un hover(sur PC) l'animation 
function setActifClassTemporarily(lienCliqué) {
	lienCliqué.classList.toggle("actif");
	setTimeout(function() {lienCliqué.classList.toggle("actif")}, getComputedStyle(document.querySelector(':root')).getPropertyValue('--durée_actif'));
}

// En fonction de la taille d'affichage, on retarde ou non la redirection au clic sur le lien
function delayLink (URL) {

	// pour la version mobile de la page, on retarde la redirection pour laisser le temps à l'animation de se jouer après le clic
	if (window.matchMedia("(max-width: 719px)").matches) {
		setTimeout( function() { window.open(URL,'_blank')}, 1500 );
	}

	// pour la version PC de la page pas de retard après le clic
	else {
		window.open(URL,'_blank')
	};
}

// -------------Diaporama de présentation des travaux réalisés (section réalisations) --------------

// Tableau contenant le détail de tout les travaux/projets présentés dans le diaporama
//Le diaporama est dynamique, il suffit d'ajouter un objet au tableau pour qu'il s'insère automatiquement au diaporama
let travaux = [
	{
		titre:"Restaurant",
		description:"Reproduction du design d'une page web à partir d'une capture d'écran comme modèle.<br><br>L'album photo et les tags sont insérés dans la page via JavaScript et les tags sont aussi rendus cliquables.<br><br>La page est adaptative & responsive, avec 2 variantes de son css (mobile & PC).",
		image:"images/images-projets/restaurant.png",
		lien:"../Restaurant/Exo_Restaurant.html",
		tags:"",
	},
	{
		titre:"Boissons",
		description:"Reproduction du design d'une page web à partir d'une capture d'écran comme modèle.<br><br>Les menus arrondis sont stylisés au survol du curseur, la section des témoignages est animée.<br><br>La page est adaptative & responsive, avec 2 variantes de son css (mobile & PC).",
		image:"images/images-projets/beverages.png",
		lien:"../Boissons/boissons.html",
		tags:"",
	},
	{
		titre:"Dashboard",
		description:"Reproduction du design d'une page web à partir d'une capture d'écran comme modèle.<br><br>Quelques animations dans les parties 'My Dashboad' (au survol) et 'Generals Stats' (au lancement de la page).<br><br>La page est adaptative & responsive, dans sa version mobile le menu de navigation n'est pas affiché par default, c'est une fenêtre modale gérée via JS.",
		image:"images/images-projets/analytics.png",
		lien:"../Analytics/Analytics.html",
		tags:"",
	},
	{
		titre:"Compteur de Clics",
		description: "Un compteur de clics amusant, pour s'exercer aux boucles et conditions en JavaScript",
		image:"images/images-projets/compteur2.png",
		lien:"../Compteur_de_Clics/Compteur_de_Clics.html",
		tags:"",
	},
	{
		titre:"Sélecteur de Villes",
		description:"Une liste de villes sélectionnables, via manipulation de tableaux JS et du DOM",
		image:"images/images-projets/villes.png",
		lien:"../Sélections_de_Villes/Sélections_de_Villes.html",
		tags:"",
	},
	{
		titre:"Formulaire",
		description:"Un modèle de formulaire",
		image:"images/images-projets/formulaire.png",
		lien:"../Formulaire/formulaire.html",
		tags:"",
	},
];

const slideTitre = document.querySelector('#slide_titre_réalisations');

const conteneurBoutons = document.querySelector('#témoignages_boutons');
const flècheGauche = document.querySelector('#flèche_gauche');
const flècheDroite = document.querySelector('#flèche_droite');

const slideDescription = document.querySelector('#slide_texte_réalisations');

const slideImages = document.querySelector('#slide_image_réalisations');

// Un tableau contenant tout les slides à translate simultanément
const slides = Array.from(document.getElementsByClassName('slide'));

// réglage de la variable css "longueur totale des slides" en fonction du nombre d'objets dans le tableau travaux
const widthSlides = travaux.length * 100 + "%";
document.querySelector(':root').style.setProperty('--width-slides',widthSlides);


// création & insertion des éléments du diaporama
travaux.forEach(function (objet,index){

	// création et insertion des titres (méthode 1 : en manipulant des éléments)
	const newDivTitre = document.createElement('div');
	newDivTitre.classList.add("conteneur_h3_slide");
	const newH3 = document.createElement('h3');
	newH3.textContent = objet.titre;
	newDivTitre.appendChild(newH3);
	slideTitre.appendChild(newDivTitre);

	// création et insertion des boutons ronds avec identifiant et data numéroté 
	flècheDroite.insertAdjacentHTML("beforebegin", `<div  id="bouton_rond_${index}" class="ronds_boutons" data-slide=${index}></div>`);

	// création et insertion des descriptions (méthode 2 : création de textes, converti en noeuds, puis inséré dans le DOM )
	slideDescription.insertAdjacentHTML("beforeend", `<div class="conteneur_p_slide"><p>${objet.description}</p></div>`);

	// création et insertion des images
	slideImages.insertAdjacentHTML("beforeend", `<a href="${objet.lien}" target="_blank"><img src="${objet.image}"></a>`);
})

// Création d'un tableau contenant tout les boutons ronds présents entre les 2 flèches
const boutons = Array.from(document.getElementsByClassName('ronds_boutons'));

// diapo actuellement affichée
let compteur = 0 ;

// calcul du décalage nécessaire (en % sur l'axe X) pour avancer/reculer d'une slide (en fonction du nb d'objets dans le tableau)
let decal = -100/travaux.length;

// Diapo suivante
function nextSlide(){
	compteur ++;
	//Reset du compteur après le dernier slide pour que le diaporama boucle
	if (compteur == travaux.length) {compteur = 0};
	// Changement de slide affichée
	slides.forEach((slide) => slide.style.transform = `translate(${decal*compteur}%)`);
	// Changement du rond affiché en doré, pour indiquer la slide active
	diapoActive();
};

// Diapo précédente
function prevSlide(){
	compteur --;
	// Pour que le diaporama boucle aussi à l'envers
	if (compteur == -1) {compteur = travaux.length-1};
	// Changement de slide affichée
	slides.forEach((slide) => slide.style.transform = `translate(${decal*compteur}%)`);
	// Changement du rond affiché en doré, pour indiquer la slide active
	diapoActive();
};

// Afficher diapo active sur les ronds de navigation
function diapoActive() {
	boutons.forEach(function(bouton) {
		if (bouton.dataset.slide == compteur) {bouton.classList.add('active')}
		else {bouton.classList.remove('active')}
	});
};

// Pour afficher la slide active dés l'ouverture de la page
diapoActive();

// Assigner les fonctions aux boutons fléchés
flècheDroite.addEventListener("click",nextSlide);
flècheGauche.addEventListener("click",prevSlide);

boutons.forEach(function (bouton){
	bouton.addEventListener("click", function() {
		changeSlide(event.target);
	});
});

//Choisir une diapo en cliquant sur les ronds de navigation
function changeSlide(clickedButton) {
	// Maj du compteur en fonction du bouton cliqué
	compteur = clickedButton.dataset.slide;
	// Changement de slide affichée
	slides.forEach((slide) => slide.style.transform = `translate(${decal*compteur}%)`);
	// Changement du rond affiché en doré, pour indiquer la slide active
	diapoActive();
};

// -------------- Défilement automatique du diaporama -------------------

// Id du timer
let timerDiapo;

//Lancement du défilement auto des diapos
function startTimer(){
	// Reset du timer pour éviter problèmes au redémarrage du défilement, après plusieurs clics successifs sur les boutons de navigation
	clearInterval(timerDiapo);
	timerDiapo = setInterval(nextSlide, 4000);
};

//Pause dans le défilement auto
function pauseTimer(){
	// Arrêt du défilement auto
	clearInterval(timerDiapo);
	//10 sec de délai avant de relancer le défilement auto
	setTimeout(startTimer, 10000);
};

//Initialisation du timer à l'ouverture de la page
startTimer();

// Pause temporaire du défilement auto, quand il y a un clic sur le menu de navigation du diaporama
conteneurBoutons.addEventListener("click", pauseTimer);

//------------------ Date & Compteur du nombre de semaines et de jours depuis le début de la formation


// Date de début de la formation CDA
let dateDebutFormation = new Date(2023, 10, 23);

//Date d'auhourd'hui
let dateDuJour = new Date();

// Durée d'une semaines en millisecondes
let duréeSemaine = 604800000;

// Durée d'un jour en milisecondes
let duréeJour = 86400000;

// Nombres de millisecondes écoulées depuis le 1er jour de formation
let duréeDeLaFormation = dateDuJour - dateDebutFormation;

//Nombres de semaines écoulées depuis le 1er jour de formation, arrondis à l'unité 
let duréeDeLaFormationSemaines = Math.floor(duréeDeLaFormation / duréeSemaine);

// Nombres de jours écoulés dans la semaine actuelle
let duréeDeLaFormationJours = Math.floor((duréeDeLaFormation%duréeSemaine)/duréeJour);

document.querySelector("#Nb_Semaines").textContent = `${duréeDeLaFormationSemaines} semaines et ${duréeDeLaFormationJours} jours`;