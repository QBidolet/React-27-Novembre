import React, { useState, useEffect } from 'react';

function DemoUseEffect(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // Exécution à chaque render : sans liste dépendance.
    // useEffect(()=>{
    //     console.log("Mise à jour à chaque render.")
    //     document.title = "Compteur " + count;
    // });

    // Exécuté uniquement au montage et au démontage.
    useEffect(()=>{
        console.log("Exécuté uniquement au montage du composant.")
        return ()=>{
            console.log("Exécuté uniquement au démontage.")
        }
        }, [])

    // Exécuté uniquement quand le state count est modifié.
    useEffect(()=>{
        console.log("Mise à jour à chaque modification de count.")
        document.title = "Compteur " + count;
    }, [count]);

      // Exécuté uniquement quand le state count est modifié.
      useEffect(()=>{
        console.log("Mise à jour à chaque modification de name.")
        console.log(name);
    }, [name]);
    
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <input 
            type="text"
            value={name}
            onChange={handleChange}
            placeholder='Nom'/>

            <button onClick={handleClick}>
            Compteur : {count}
            </button>
        </div>
    )
}

export default DemoUseEffect;