import React, { useRef } from 'react';

function UncontrolledForm() {
    const inputRef = useRef("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("La valeur soumise est : " + inputRef.current);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom:
                <input type="text" ref={inputRef}></input>
            </label>
            <input type="submit" value="Envoyer"></input>
        </form>
    )
}

export default UncontrolledForm;