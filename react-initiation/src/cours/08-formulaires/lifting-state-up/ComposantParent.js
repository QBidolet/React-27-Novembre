import React, {useState} from "react";
import ComposantA from "./ComposantA";

const ComposantParent = () => {
    const [valeurPartagee, setValeurPartagee] = useState("");

    const handleValueChange = (value) =>{
        // Votre logique ...
        setValeurPartagee(value);
    }

    return(
        <div>
            <ComposantA valeur={valeurPartagee} setValeur={handleValueChange}></ComposantA>
        </div>
    )
}