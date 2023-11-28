import React, {useState} from 'react';

function ControlledForm(){
    const [inputValue, setInputValue] = useState("");

    const handleInputValueChange = (event)=> {
        const value = event.target.value;
        setInputValue(value);
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Formulaire soumis : " + inputValue);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" value={inputValue} onChange={(handleInputValueChange)}></input>
                <input type="submit" value="Envoyer"></input>
            </label>
        </form>
    )
}

export default ControlledForm;