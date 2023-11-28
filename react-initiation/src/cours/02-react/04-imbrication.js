import React from 'react';

function Parent() {
    return (
        <div>
            <h2>Je suis le composant Parent.</h2>
            <Enfant />
        </div>
    );
}

function Enfant() {
    return (
        <p>Je suis le composant Enfant.</p>
    )
}

function GrandParent() {
    return (
        <div>
            <h1>Je suis le Grand-Parent.</h1>
            <Parent />
        </div>
    )
}

function App() {
    return (
        <div>
            <GrandParent />
            <Parent />
        </div>
    )
}

export default App;