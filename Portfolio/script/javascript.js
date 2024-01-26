// -------------Diaporama de présentation des travaux réalisés--------------

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
		description:"Création d'un modèle de formulaire",
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

	// création et insertion des boutons ronds avec identifiant numéroté 
	flècheDroite.insertAdjacentHTML("beforebegin", `<div  id="bouton_rond_${index+1}" class="ronds_boutons"></div>`);

	// création et insertion des descriptions (méthode 2 : création de textes, converti en noeuds, puis inséré dans le DOM )
	slideDescription.insertAdjacentHTML("beforeend", `<div class="conteneur_p_slide"><p>${objet.description}</p></div>`);

	// création et insertion des images
	slideImages.insertAdjacentHTML("beforeend", `<a href="${objet.lien}" target="_blank"><img src="${objet.image}"></a>`);
})

