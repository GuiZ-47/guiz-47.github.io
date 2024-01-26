
// création et insertion des tags

var tagsSection = document.getElementById('popular_tags');

var tags = ['Travel','New York','Dinner','Salmon','France','Drinks','Ideas','Flavors','Cuisine','Chicken','Dressing','Fried','Fish','Duck'];


tags.forEach(function addTags(tag) {
// créer un nouveau élément <p> de classe .tag
	var newP = document.createElement('p');
//ajouter la classe
	newP.classList.add("tags");
// ajouter les tags dans les <p>
	newP.textContent = tag;
//placer les <p> dans le bon conteneur
	tagsSection.appendChild(newP)
});

// Changer le CSS au clique sur les tags

var tagsP = document.getElementsByClassName('tags');

for (var i = 0; i < tagsP.length; i++) {
	tagsP[i].addEventListener("click", function(){
		for( var eachElement of tagsP){
 		eachElement.classList.remove("tag--cliqué")
		};
		this.classList.add("tag--cliqué");
	})
};

// 3 variantes en utilisant forEach à la place de for

					// Array.from(tagsP).forEach(function(pElement, index, array){
					// 	pElement.addEventListener("click", function(){
					// 		for( var eachElement of tagsP){
					//  		eachElement.classList.remove("tag--cliqué")
					// 		};
					// 		this.classList.add("tag--cliqué"); 
					// 	})
					// }) 


					// Array.from(tagsP).forEach(function(pElement, index, array){
					// 	pElement.addEventListener("click", function(){
					// 		for( var eachElement of tagsP){
					//  		eachElement.classList.remove("tag--cliqué")
					// 		};
					// 		pElement.classList.add("tag--cliqué");
					// 	})
					// }) 


					// Array.from(tagsP).forEach(function(pElement, index, array){
					// 	pElement.addEventListener("click", function(){
					// 		for( var eachElement of tagsP){
					//  		eachElement.classList.remove("tag--cliqué")
					// 		};
					// 		tagsP[index].classList.add("tag--cliqué");
					// 	})
					// }) 

var tableauPlats = [
	{
		photo:"images/sandwich.jpg",
		titre:"The Perfect Sandwich !",
		description:"Just some random text, lorem ipsum dolor sit amet, consectetur adipiscing elit."
	},
	{
		photo:"images/steak.jpg",
		titre:"Où étiez-vous passés ? On steak haché !",
		description:"Once again, some random text to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	},
	{
		photo:"images/cherries.jpg",
		titre:"Cherries j'ai rétréci les gosses",
		description:"Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. What else?"
	},
	{
		photo:"images/wine.jpg",
		titre:"Avec modération",
		description:"Aliquam sem et tortor consequat id porta nibh venenatis cras."
	},
	{
		photo:"images/popsicle.jpg",
		titre:"Briser la glace",
		description:"Tortor posuere ac ut consequat semper viverra."
	},
	{
		photo:"images/salmon.jpg",
		titre:"Le saumon c'est super bon",
		description:"Once again, some random text to Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Elementum pulvinar etiam non quam lacus suspendisse faucibus."
	},
	{
		photo:"images/sandwich.jpg",
		titre:"MIAM !",
		description:"Lectus sit amet est placerat in egestas erat. Tortor posuere ac ut consequat semper viverra."
	},
	{
		photo:"images/croissant.jpg",
		titre:"L'ordre des croissants",
		description:"Elementum facilisis leo vel fringilla est ullamcorper."
	}
	
]

const sectionAlbumPhoto = document.getElementById('album_photo')
let baliseArticle =""



function créerBaliseArticle(){
	baliseArticle = document.createElement('article')
	baliseArticle.classList.add("article_album")
	sectionAlbumPhoto.appendChild(baliseArticle)
}

function créerBaliseImg(arg){
	var baliseImg = document.createElement('img')
	baliseImg.setAttribute("src", arg)
	baliseArticle.appendChild(baliseImg)
}

function créerBaliseTitre(arg){
	var baliseTitre = document.createElement('h2')
	baliseTitre.textContent = arg
	baliseArticle.appendChild(baliseTitre)
}

function créerBaliseDescription(arg){
	var baliseDescription = document.createElement('p')
	baliseDescription.textContent = arg
	baliseArticle.appendChild(baliseDescription)
}

function newArticle(arg1,arg2,arg3){
	créerBaliseArticle()
	créerBaliseImg(arg1)
	créerBaliseTitre(arg2)
	créerBaliseDescription(arg3)
}

tableauPlats.forEach(function (objet,index){
	newArticle(objet.photo, objet.titre, objet.description)
})



// Test des fonctions
// créerBaliseArticle()
// créerBaliseImg("images/sandwich.jpg")
// créerBaliseTitre("The Perfect Sandwich, je le déglingue !")
// créerBaliseDescription("Just some random text, lorem ipsum dolor sit amet, consectetur adipiscing elit.")

// newArticle("images/sandwich.jpg","The Perfect Sandwich, je le déglingue !","Just some random text, lorem ipsum dolor sit amet, consectetur adipiscing elit.")
