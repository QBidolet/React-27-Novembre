import React from 'react';

const ComposantA = ({valeur, setValeur}) => {
    const handleChange = (e) => {
        setValeur(e.target.value);
    }

    return (
        <input type="text"
        value={valeur}
        onChange={handleChange}/>
    )
}

export default ComposantA;