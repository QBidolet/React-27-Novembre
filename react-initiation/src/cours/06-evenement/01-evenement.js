import React from "react";

function Bouton(){
    // handler
    // 1. Syntaxe de base
    // const handleClick = () =>{
    //     alert('Bouton cliqué !');
    // }
    // return <button onClick={handleClick}>Cliquez ici</button>;

    // 2. Syntaxe alternative
    return <button onClick={()=>{alert('Bouton cliqué !')}}>Cliquez ici</button>;
}

// 3. Objet event
// Les événements React passent automatiquement 
// l'objet event au gestionnaire, similaire à celui de Javascript Natif.

function Form(){
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Formulaire soumis.")
    };

    return <form onSubmit={handleSubmit}></form>
}

// 4. Evenement et this (context)
class Binding extends React.Component {
    constructor(props){
        super(props);
        // Lier manuellement le contexte dans le constructeur.
        this.handleClick = this.handleClick.bind(this);

    }

    handleClick(){
        alert("Le contexte est : " + this);
    }

    // Autobinding avec la fonction fléchée.
    // handleClick = () => {
    //     alert("Le contexte est : " + this);
    // }

    render(){
        return <button onClick={this.handleClick}>Cliquez ici</button>
    }
}

export default Binding;