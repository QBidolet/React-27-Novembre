import React, { useState } from 'react';

function CompteurFonctionnel() {
    // Initialiser un state avec useState
    const [compteur, setCompteur] = useState(0);
    
    const incrementer = () => {
        setCompteur(compteur + 1);
    }

    // function incrementer() {
    //     setCompteur(compteur + 1);
    // }

    return (
        <div>
            <h2>Compteur : {compteur}</h2>
            <button onClick={incrementer}>Incrémenter</button>
        </div>
    )
}

class CompteurClasse extends React.Component{
    // Initialiser le state dans le constructeur.
    constructor(props){
        super(props);
        this.state = {
            compteur: 0
        };
    }

    incrementer = () => {
        this.setState({ compteur: this.state.compteur + 1 });
    };

    render(){
        return (
            <div>
                <h2>Compteur : {this.state.compteur}</h2>
                <button onClick={this.incrementer}>Incrémenter</button>
            </div>
        );
    }
}

function App(){
    return(
        <div>
            <CompteurFonctionnel></CompteurFonctionnel>
            <CompteurClasse></CompteurClasse>
        </div>
    )
}

export default App;