// Un composant de classe est défini en héritant 'Component' de React.

import React, { Component } from 'react';

class MonComposant extends Component {
    // 1. Créer le constructeur.
    // Il va initialiser le composant.
    constructor(props){
        super(props);
    }
    // 2. Remplir la logique du composant ...

    // 3. La méthode render() est obligatoire et retourne les éléments JSX à afficher.
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <p>Un paragraphe</p>
            </div>
        )
    }
}

export default MonComposant;