var nomsVilles = [
	"Paris",
	"Lyon",
	"Marseille",
	"Montpellier",
	"Rennes",
	"Grenoble",
	"Nantes",
	"La Rochelle",
]

const DivGauche = document.getElementById('tableau_gauche')
const DivDroite = document.getElementById('tableau_droite')


let Villes =[]

//Création et insertion des <span> dans le HTML
for(var index in nomsVilles) {
Villes[index] = document.createElement("span")
Villes[index].className = ("ville")
Villes[index].textContent = nomsVilles[index]
DivGauche.appendChild(Villes[index])
}


// Un Tableau pour pouvoir regrouper les villes à trier par ordre alphabétique
let TableauDeTri=[]

/////////////////////// Méthode 1 /////////////////
Villes.forEach(function (ville_cliquée) {
	ville_cliquée.addEventListener("click", function(){
		if (ville_cliquée.parentElement === DivGauche) {
			// comme l'élément ciblé est déjà présent dans le HTML, .appendChild permet de déplacer l'élément dans l'autre <div>, 
			DivDroite.appendChild(ville_cliquée);
			// remplissage du tableau de trie avec tout les enfants de la <div> à trier ( la div qui vient d'avoir un nouvel enfant)
			TableauDeTri = Array.from(DivDroite.children);
			// trie du tableau par ordre alphabétique avec les fonctions .sort() et .locacaleCompare()
			TableauDeTri.sort(function(a,b){  
				return a.textContent.localeCompare(b.textContent);
				});
			// On réorganise les éléments affichés en les réinsérant dans la <div> dans l'ordre du tableau de tri
			TableauDeTri.forEach(function(ville){
				DivDroite.appendChild(ville);
			});
		}
		else {
			DivGauche.appendChild(ville_cliquée);
			TableauDeTri = Array.from(DivGauche.children);
			TableauDeTri.sort(function(a,b){
				return a.textContent.localeCompare(b.textContent);
				});
			TableauDeTri.forEach(function(ville){
				DivGauche.appendChild(ville);
			});
		}
	})
})


////////////////////// Méthode 2 (décomposition en sous-fonctions pour s'entraîner à gérer les paramètres dans les fonctions imbriquées)

// Villes.forEach(function (ville_cliquée) {
// 	ville_cliquée.addEventListener("click", function(){
// 		if (ville_cliquée.parentElement === DivGauche) {
// 			VillesOnClick(DivDroite,ville_cliquée)
// 		}
// 		else {
// 			VillesOnClick(DivGauche,ville_cliquée)
// 		}
// 	})
// })

// function VillesOnClick(div, ville){
// 	DéplacementDeLaVille(div,ville);
// 	TrieAlphabétique(div);
// }

// function DéplacementDeLaVille(div,ville){
// 	div.appendChild(ville);
// }

// function TrieAlphabétique(div){
// 	TableauDeTri = Array.from(div.children);
// 	TableauDeTri.sort(function(a,b){
// 		return a.textContent.localeCompare(b.textContent);
// 		});
// 	TableauDeTri.forEach(function(villes){
// 		div.appendChild(villes);
// 	});
// }
