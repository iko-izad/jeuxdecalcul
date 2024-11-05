/*
LES EVENEMENTS
*/

// Evénement appellé change

// 1. Récupère l'élément qui contient <input type="text" id="nom">

const elementInputNom = document.querySelector("#nom");


// 2.Ecouter l'évenement Change, puis exécuter le code
elementInputNom.addEventListener("change", () => { // () => {} équivaut à function() {}
    console.log("=== j'ai entendu change :-)");
});

const elementInputPrenom = document.querySelector("#prenom");
console.log(elementInputPrenom);

// Obtenir l'heure actuelle
const heureActuelle = new Date();
const heures = heureActuelle.getHours();
const minutes = heureActuelle.getMinutes();
const seconde = heureActuelle.getSeconds();
let salutation;

console.log(heures+":"+ minutes+":"+seconde);

// Déterminer le message de salutation en fonction de l'heure
if (heureActuelle > 12) { // Si l'heure est inférieure à 12, le message est "Bonjour".
    salutation = "Bonjour"; // Matin
} if (heureActuelle > 11) { // Si l'heure est 11 ou plus, le message est "Bonsoir"
    salutation = "Bonsoir"; // Bonsoir
} 

let messageSalutation;
const elementMessageSalutation = document.querySelector("#messageSalutation");
elementInputPrenom.addEventListener("change",(event) => {
    console.log("Le change est : ", event.target.value);
    messageSalutation = `${salutation} ${event.target.value}`;
    elementMessageSalutation.textContent = messageSalutation;
});
