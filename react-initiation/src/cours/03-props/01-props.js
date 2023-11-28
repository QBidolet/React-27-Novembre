// Les props (propriétés) sont un mécanisme pour passer des données en React.
// Elles servent à transmettre des informations
// d'un composant à un autre.

import React from "react";

// 1. Créer un composant qui utilise une prop.
function Message(props){
    return <h1>{props.texte}</h1>
}

// 2. Utiliser le composant Message.
function App(){
    return (
        <div>
            <Message texte="Bonjour React!"></Message>
        </div>
    )
}


// 3. Les props sont en lecture seule
export function Compteur(props){
    // props.valeur = 10; Interdit, cela provoque une erreur.
    return <h2>Le compteur est à {props.valeur}</h2>
}

// 4. Destructuration des props
export function Salutation({nom, age}){
    return (
        <p>
            Bonjour je m'appelle {nom} et j'ai {age} ans.
        </p>
    )
}

// 5. Props par défaut
function Bienvenue({nom = "Visiteur"}){
    return <h2>Bienvenue {nom}.</h2>
}

// 6. Children
// children est une prop spéciale qui contient les éléments enfants passés au composant.
export function Wrapper({children}){
    return <div>
         {children}
    </div>
}

export default App;
