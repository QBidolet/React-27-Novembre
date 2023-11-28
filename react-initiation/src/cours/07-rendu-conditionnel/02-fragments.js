import {Fragment} from 'react';

// Première syntaxe de fragment : Explicite
return (
    <ul>
        {elements.map((element, index)=>{
            <Fragment>
                <p>...</p>
                <li key={index}>{element}</li>
            </Fragment>
        })}
    </ul>
)

// Deuxième syntaxe : implicite
return (
    <ul>
        {elements.map((element, index)=>{
            <>
                <p>...</p>
                <li key={index}>{element}</li>
            </>
        })}
    </ul>
)

