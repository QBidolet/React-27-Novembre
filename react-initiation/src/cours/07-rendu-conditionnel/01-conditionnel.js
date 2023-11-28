import React, { useState } from 'react';

// 1. Utiliser un if
function MessageBienvenue({ estConnecte }) {
    if (estConnecte) {
        return <h1>Bienvenue utilisateur !</h1>
    } else {
        return <h1>Veuillez vous connecter.</h1>
    }
}

// 2. Utilisation de l'opérateur ternaire.
export function Message({ estConnecte }){
    return(
        <div>
            {
                estConnecte ? 
                <h1>Bienvenue à nouveau !</h1> 
            : 
                <h1>Veuillez vous connecter.</h1> 
            }
        </div>
    )
}

// 3. Opérateur logique &&
function Alert({afficherAlerte}){
    return(
        <div>
            {afficherAlerte && <div>Alerte ! Quelque chose s'est passé! </div>}
        </div>
    )
}

// 4. Utiliser null pour ne rien afficher

// 5. Rendu de liste conditionnelle avec filter et map
function ListeTaches({taches}){
    return(
        <ul>
            {taches.filter(tache => tache.estComplete).map(tacheFiltree => {
                <li key={tacheFiltree.id}>{tacheFiltree.texte}</li>
            })}
        </ul>
    )
}
