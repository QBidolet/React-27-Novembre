// React Router est une bibliothèque externe, il faut l'installer via npm.
// npm install react-router-dom@5

import React from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import { Component } from 'react';

function Accueil(){
    return <h2>Page d'accueil</h2>
}

function APropos(){
    return <h2>A propos</h2>
}

function Utilisateur({ match }){
    return <h2>Utilisateur {match.params.userId}</h2>
}

function ReactRouter(){
    return (        
        <BrowserRouter>
        {/* On enveloppe  l'ensemble des routes 
            avec un Router, par exemple BrowserRouter.*/}
            <nav>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/apropos">A propos</Link></li>
                <li><Link to="/utilisateur/123">Utilisateur 123</Link></li>
            </ul>
            </nav>
            {/* Le composant Switch qu'on utilise pour grouper plusieurs routes. */}
            <Switch>
            {/* Chaque Route défini un chemin et le composant à rendre.*/}
                <Route path="/" exact component={Accueil}></Route>
                {/* exact est utilisé pour dire que le chemin doit correspondre exactement.*/}
                <Route path="/apropos" component={APropos}></Route>
                <Route path="/utilisateur/:userId" component={Utilisateur}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default ReactRouter;