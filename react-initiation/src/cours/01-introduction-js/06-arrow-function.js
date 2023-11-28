// Arrow Function : Syntaxe alternative pour la création de fonction, plus courte.
const saluer = () => {
    console.log("Bonjour !");
}

saluer();

// Un seul paramètre
const direBonjour = nom => {
    console.log("Bonjour " + nom);
}

direBonjour("Quentin");

// Plusieurs paramètres
const additionner = (a, b) => {
    return a + b;
}

// Retour implicite
const multiplier = (a, b) => a * b;

console.log(multiplier(2, 3))