import React from 'react';

const ComposantB = ({valeur, setValeur}) => {
    const handleChange = (e) => {
        setValeur(e.target.value);
    }

    return (
        <div>
            <p>La valeur partagée est : {valeur}</p>
            <button onClick={()=>{setValeur("")}}>
                Réinitialiser
            </button>
        </div>
    )
}

export default ComposantB;