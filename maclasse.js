// La notion de Classe en  javascript

// La syntaxe de Classe
// On veut voir de quoi est composée une Classe

class MyClasse {
    // Les méthodes de ma Classe MyClasse
    constructor( ) {} // constructeur dde ma classe
    methode1() {} // première méthode de ma classe
    methode2() {} // deuxème méthode de ma classe
    methode2() {} // deuxème méthode de ma classe
}

class Utilisateur{
    constructor(monUtilisateur) { // mon constructeur
        this.nom = monUtilisateur;
    }
    
    binevenue() {
        alert("Bienvenue" + " " +  this.nom);
    }

   
getHeure() {
    const date = new Date();
    // Récupère l'heure et la stocke dans la variable heure
    let heure = date.getHours();
    // Récupère les minutes et les stocke dans la variable minutes
    let minutes = date.getMinutes();
    let seconde = date.getSeconds();

    // Ajout de la condition pour formater les secondes
    if (seconde < 10) {
        seconde = '0' + seconde;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    // Affichage de l'heure formatée
    console.log(heure + ":" + minutes + ":" + seconde);
    
   
}

}

// Implémenter ma Classe Utilisateur en creant un Object appartenant à la Classe  Utilisateur 
let utilisateur = new Utilisateur("Madi");

/*
=======================EXPLICATION DE CODE let utilisateur = new Utilisateur("Madi"); ======
Lorsque new Utilisateur ("Madi") est appelé :
  1. un nouvel object créé. l'object créé utlisateur.
  2. Le construtor s'exécute avec l'argument "Madi" qui lui est passé
     et assigne this.nom à l'object.
   3. nous pouvons maintenant appeler de l'object créé. Par exemple utilisateur.bienvenu()
   */
utilisateur.binevenue();

let utilisatrice = new Utilisateur("fATIMA");
utilisatrice.binevenue();
utilisateur.getHeure();