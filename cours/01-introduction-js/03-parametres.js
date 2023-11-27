function saluer(nom){
    console.log("Bonjour " + nom);
}

saluer("Quentin");

// Paramètres par défaut
function direBonjour(nom = "Visiteur"){
    console.log("Bonjour " + nom);
}

direBonjour();

// Déstructuration
function afficherInfosUtilisateur({ nom, age }){
    console.log(`Nom : ${nom}, Age : ${age}`);
}

let utilisateur = { 
    nom: "Quentin",
    age: 29
    }
    
afficherInfosUtilisateur(utilisateur);
