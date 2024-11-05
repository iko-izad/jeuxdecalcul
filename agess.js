// Fonction pour calculer l'âge
function calculAge(anneeNaissance, anneeEncours) { 
  let age = anneeEncours - anneeNaissance;
  console.log(age);
  return age;
}

// Sélection des éléments du DOM
let elmentNom = document.querySelector("#nom");
let elmentPrenom = document.querySelector("#prenom");
let elmentAnneeNaissance = document.querySelector("#anneeNaissance");
let elmentbuttonValider = document.querySelector("#buttonvalider");
let elementSpan = document.querySelector("#messageAge"); // Correction ici
const anneeActuelle = new Date().getFullYear()

let spanAnnee = document.querySelector("#annee");
  spanAnnee.innerHTML = anneeActuelle;


  
// Ajout d'un écouteur d'événement sur le bouton Valider
elmentbuttonValider.addEventListener("click", function () {
  

  

  // Récupérer les valeurs saisies par l'utilisateur
  let nom = elmentNom.value;
  console.log("Nom :", nom);
  
  let prenom = elmentPrenom.value;
  console.log("Prénom :", prenom);

  // Récupérer la situation à partir des boutons radio
  let situation;
  if (document.querySelector("#situationEtudiant").checked) {
    situation = "Étudiant";
  } else if (document.querySelector("#situationSalarie").checked) {
    situation = "Salarié";
  } else {
    situation = "Non spécifié"; // Si aucune situation n'est sélectionnée
  }
  console.log("Situation :", situation);
  
  let anneeSaisie = elmentAnneeNaissance.value; // Convertir en nombre
  console.log("Année de naissance :", anneeSaisie);


  // Calcul de l'âge
  let age = calculAge(anneeSaisie, 2024);
 
  
  // Affichage de l'âge
  elementSpan.innerHTML = ` ${nom} ${prenom} vous avez ${age} ans. `; // Correction ici

  // Vérification de l'âge
  if (age < 18) {
    elementSpan.innerHTML += `Vous êtes mineur. `;
  } else {
    elementSpan.innerHTML += `Vous êtes majeur. `;
  }

  // Affichage de la situation
  elementSpan.innerHTML += `Vous êtes ${situation}.`;
});







