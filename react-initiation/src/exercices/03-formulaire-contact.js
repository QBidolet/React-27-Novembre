// Construire un formulaire contrôlé de contact simple permettant de saisir :
// - le nom
// - l'email
// - un message
// Lorsqu'on soumet le formulaire, afficher une alert avec les valeurs.

function FormulaireContact(){
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Nom ${nom}, Email: ${email}, Message ${message}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Nom:
                    <input
                    type="text"
                    value={nom}
                    onChange={(e) => {setNom(e.target.value)}}
                    placeholder="Votre nom"/>
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    placeholder="Votre email"/>
                </label>
            </div>
            <div>
                <label>
                    Message:
                    <textarea
                    value={message}
                    onChange={(e) => {setMessage(e.target.value)}}
                    placeholder="Votre message"/>
                </label>
            </div>
        </form>
    )
}