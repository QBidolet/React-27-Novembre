// let : pour des variables qui peuvent changer.
let ageLet = 25;

// const : pour des variables qui ne changeront pas.
const ageConst = 25;

// var : ancienne manière de déclarer des variables (moins utilisée maintenant).
var ageVar = 25;

// Portée des variables.
let fruit = "pomme";

function afficherFruit(){
    // Portée locale
    const legume = "carotte";
    console.log(fruit);
    console.log(legume);
}

afficherFruit();
console.log(fruit);
