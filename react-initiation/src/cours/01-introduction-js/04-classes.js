// Une classe est un modèle pour créer un objet.

class Voiture {
    constructor(marque, modele){
        this.marque = marque;
        this.modele = modele;
    }

    afficherInfos(){
        console.log(`Marque : ${this.marque}, Modèle ${this.modele}.`);
    }
}

// Instancier un objet
let maVoiture = new Voiture("Tesla", "Y");
console.log(maVoiture.marque)
console.log(maVoiture.modele)
maVoiture.afficherInfos();

// Héritage
class VoitureElectrique extends Voiture {
    constructor(marque, modele, autonomie){
        super(marque, modele); // Vous appelez le constructeur du parent, c'est à dire Voiture.
        this.autonomie = autonomie;
    }

    afficherAutonomie(){
        console.log(`Autonome: ${this.autonomie} km.`)
    }
}

let maVoitureElectrique = new VoitureElectrique("Tesla", "Model S", 500);
maVoitureElectrique.afficherAutonomie();
maVoitureElectrique.afficherInfos();