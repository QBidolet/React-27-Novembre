import React, { useState, useEffect } from 'react';

// Custom Hook pour avoir la position de la souris
function useMousePosition() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition(
                {
                    x: e.clientX,
                    y: e.clientY
                });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () =>{
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, []); // Exécuté uniquement au montage du composant car liste de dépendance vide.

    return position
}

function AffichagePosition(){
    const {x, y} = useMousePosition();

    return (
        <div>
            <p>Position de la souris - X : {x} - Y : {y}</p>
        </div>
    )
}

export default AffichagePosition;