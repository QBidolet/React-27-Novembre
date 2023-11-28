import React, { Component } from 'react';

class CycleDeVie extends Component {
   constructor(props){
    super(props);
    this.state = {
        compteur: 0
    };
    console.log("1. Constructeur - Initialisation du composant.")
   }

   componentDidMount(){
    console.log("3 - componentDidMount : Le composant est monté.");
   }

   shouldComponentUpdate(nextProps, nextState){
    console.log("4 - shouldComponentUpdate : Détermine si le composant doit être mis à jour.");
    return true;
   }

   componentDidUpdate(prevProps, prevState){
    console.log("5 - componentDidUpdate : Le composant est mis à jour.")
    console.log("Ancien état :", prevState);
    console.log("Nouvel état :", this.state);
   }

   componentWillUnmount(){
    console.log("6. componentWillUnmount : Le composant va être démonté.");
    // Nettoyage de ressource, annuler des abonnements etc.
   }
   
   handleClick = () => {
        this.setState(
            (prevState) => ({compteur: prevState.compteur + 1})
            );
        // this.setState({compteur: this.state.compteur + 1});
   }

   render(){
    console.log("2. Render du composant.")
    return (
        <div>
            <h1>Démonstration du cycle de vie d'un composant.</h1>
            <p>Compteur : {this.state.compteur}</p>
            <button onClick={this.handleClick}>Incrémenter</button>
        </div>
    )
   }
}

export default CycleDeVie;
