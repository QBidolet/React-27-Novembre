import React, {useState} from 'react';

function Notes(){
    const [note, setNote] = useState("");

    const handleNoteChange = (event) => {
        setNote(event.target.value);
    }
    
    const handleSubmit = () => {
        // Envoyer des données à un serveur ...
        alert('Note sauvegardée : ' + note);
    }
    
    const handleDelete = () => {
        // Interagir avec un serveur ? 
        setNote("");
    }
    return (
        <div>
            <h1>Application de Notes</h1>
            {/*
                Créer un champ pour ajouter un texte multiligne.
                Créer un bouton pour sauvegarder la note.
                 Mettez juste un alert() pour vérifier le fonctionnement.
                Créer un bouton pour supprimer la note : Clear le champ note.
                Afficher la note actuelle dans un paragraphe.
            */}
            <textarea
                value={note}
                onChange={handleNoteChange}
            />
            <button onClick={handleSubmit}>Sauvegarder la note</button>
            <button onClick={handleDelete}>Supprimer la note</button>
            <div>
                <h2>Note actuelle</h2>
                <p>{note}</p>
            </div>
        </div>
    )
}

export default Notes;