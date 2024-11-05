// LES REGLES DE VALITATION DE FORMULAIRE

// créér une fonction qui vérifier la valeur du champ
function verifierChamp(champ) {
    if (champ === "") {
        console.log(`Le champ  est vide.`);
        return false; // Retourne false si le champ est vide
    } else {
        console.log(`#### (-_-) est rempli.`);
        return true; // Retourne true si le champ est rempli
    }
}

// A vous jouer  !!!

//Objectif: Vérifier que le champs "Nom" est bien complété

const elementFormulaire = document.querySelector("form");
console.log(elementFormulaire);
// ajoute un écouteur d'événement sur le formulaire. pourquoi? pour écouter l'événement submit
elementFormulaire.addEventListener("submit", (event) => {
    /* On empêche le comportement par défaut de l'événement submit
       event.preventDefault(); permet d'éviter un rechargement la page
    */
    event.preventDefault();

   // Récupère l'élement qui contient le nom
   const elementInputNom = document.querySelector("#nom");
   const valueNom = elementInputNom.value;

   // Vérifier la valeur du champ "nom"
   if (valueNom === "") {
       console.log("le Champ nom est vide.");
   } else {
   console.log("#### (-_-) Nom est rempli.");
   }

   // Objectif: Vérifier que la valeur du champ "Prenom" n'est pas vide
   
   const elementInputPrenom = document.querySelector("#prenom");
   const valuePrenom = elementInputPrenom.value;
   

   if(valuePrenom === "") {
      console.log("le Champ prenom est vide.");
   } else {
    console.log("#### (-_-) Prenom est rempli.");
   }

});