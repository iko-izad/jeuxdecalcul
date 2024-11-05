
let nom = "bob";
let prenom ="Loki" ;
let dateDeNaissance = 1988; 
// permet de déterminer le type d'une variable ou d'une expression. Il retourne une chaîne de caractères indiquant le type, comme "string"
console.log(typeof nom);
            
console.log(typeof prenom);
        
console.log(typeof dateDeNaissance);



// Une boîte de dialogue apparaît avec le message "Quel âge avez-vous ?".
let age = prompt('Quel âge avez-vous ?');/*prompt() est une fonction intégrée en JavaScript qui affiche 
une boîte de dialogue avec un message et un champ de saisie.*/
        alert(`vous avez ${age} ans!`);



// Une boîte de dialogue apparaît avec le message "Etes-vous codeur ?" et deux boutons : "OK" et "Annuler"
let isCodeur = confirm("Etes-vous codeur ?"); /**Après que l'utilisateur a fait un choix, 
une alerte s'affiche avec true ou false en fonction de la réponse.  confirm() est une fonction intégrée en JavaScript qui affiche une boîte de dialogue avec un message et deux options (généralement "OK" et "Annuler").
Elle retourne un booléen (true ou false) selon le choix de l'utilisateur. confirm() est utilisé pour obtenir une confirmation de l'utilisateur avant d'effectuer une action. Par exemple, il peut être utilisé pour demander à l'utilisateur 
s'il est sûr de vouloir supprimer un élément ou poursuivre une opération.
C'est une méthode simple pour gérer les décisions de l'utilisateur dans les applications web.*/
        alert( isCodeur );


// Une boîte de dialogue apparaît avec le message "Veuillez entrer votre nom" ?".
 nom = prompt("Veuillez entrer votre nom :");
        alert("Bonjour, " + nom);


// Une alerte s'affiche avec le message 3, indiquant que la valeur de hisabu a été incrémentée.
let hisabu = 2;
// hisabu++ augmente la valeur de hisabu de 1, passant de 2 à 3, et l'alerte affiche cette nouvelle valeur.
hisabu ++;
    alert( hisabu);

// Dans le cas de hisabu++, l'ancienne valeur est utilisée avant l'incrémentation, tandis que pour ++hisabu, la valeur est incrémentée avant d'être utilisée.
let shikoa = ++hisabu;
         alert( shikoa);




// Opérateur Matéhmatique
let mois = 1; // mois vaut 2

mois = 5 // mois vaut 5

// mois += 2; mois vaut 7 
// je mets à jour la valeur de la variable mois
// 1.je récupère la valeur actuelle de la variable mois
// 2.j'ajoute +2 à la valeur actuelle, ce qui donner 7
// 3.je stocke la nouvelle valeur dans la variable mois
mois += 2; // mois += 2; est identique à mois = mois + 2; Résultat est 7


// mois *= 2; mois vaut 14
// je mets à jour la valeur de la variable mois
// 1.je récupère la valeur actuelle (7) de la variable mois
// 2.je mutlipie par 2  la valeur actuelle, ce qui donner 14
// 3.je stocke la nouvelle valeur dans la variable mois
mois *= 2; // mois *= 2; est identique à mois = mois * 2; Résultat est 14
// Icrémentation
let compteur = 2;
compteur++; // Maitenant, la variable compteur vaut 3. ++ ça vaut dire que tu rajoutes +1

// Décrémentation 
let distance = 4; // La varaible distance vaut 4
compteur--; // Maitenant, la variable compteur vaut 3. -- ça vaut dire que je soustrais -1



let annee = prompt('Dans quelle année sommes-nous ?');
// Cette structure conditionnelle vérifie si la valeur de annee est égale à 2015.
if (annee == 2015) {
    alert( 'Vous avez juste!' );
// Sinon, le code dans le bloc else s'exécute
} else {
     alert( 'Vous vous trompez?' );
}






/* Ici, on crée une nouvelle instance d'un objet vide nommé utilisateur
 à l'aide du constructeur Object.*/
let monNom = new Object();
        console.log(nom);


let person =  {
        monNom: "bob",
        monPrenom: "Loki",
        profession: "politicien",
        monVillage: "chiconi",
}

console.log(person.monNom);
console.log(person.monPrenom);
console.log(person.monVillage);


// Tableaux

// Ajout de la variable monTableauVille
let monTableauVille = ["Paris", "Toulouse", "Marseille", "Mamoudzou", "Dzaoudzi", "Acoua", "Chirongui"];

// Affichage du type de la variable monTableauVille
console.log("Type de monTableauVille :", typeof monTableauVille);

// Affichage de tous les éléments de monTableauVille en utilisant une boucle
for (let i = 0; i < monTableauVille.length; i++) {
  console.log(`${i}`,":", monTableauVille[i]);
}

const eleve = {
        nom:'Abdou',
        age: 18,
        notes:[10,4,18]
}
console.log(eleve.nom);
let ageEleve = eleve.age;
console.log(eleve.age);
let notesEleve = eleve['notes'];

for (let i = 0; i < notesEleve.length; i++) {
        console.log(notesEleve[i]);
}