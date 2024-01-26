var menuDialog = document.getElementById('dashboard')
var menuBouton = document.getElementById('bouton_menu')
var menuBoutonFermer = document.getElementById('bouton_fermer')


menuBouton.addEventListener("click", function () {
	menuDialog.showModal();
})

menuBoutonFermer.addEventListener("click", function () {
	menuDialog.close();
})



console.log(menuDialog)
console.log(menuBouton)
