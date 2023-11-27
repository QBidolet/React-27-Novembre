// Déclaration de plusieurs variables

let nombre = 42;
let chaine = "Hello World!";
let estVrai = true;
let nonDefini;
let valeurNull = null;


// Détecter le type d'une variable : typeof
console.log(typeof nombre);
console.log(typeof chaine);
console.log(typeof estVrai);
console.log(typeof nonDefini);
console.log(typeof valeurNull);

// Conversion de type : implicite
let somme = "5" + 2;
let produit = "5" * "2";

console.log(somme)
console.log(produit)

// Conversion de type : explicite
let chaineEnNombre = parseInt("123"); // Convertit en nombre.
let nombreEnChaine = nombre.toString(); // Convertit en string.



