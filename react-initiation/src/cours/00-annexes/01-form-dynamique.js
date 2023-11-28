
import {useState} from "react";

function ContactForm() {
    const [contactMsg, setContactMsg] = useState({nom: '', 'email': '', 'message': ''});

    const handleSubmitForm = (e) => {
        e.preventDefault();
        alert("Le formulaire a été envoyé. Nom : " + contactMsg.nom + " - Email : " + contactMsg.email + " - Message : " + contactMsg.message);
    }

    const handleChangeVal = (e, path) => {
        setContactMsg((prevState) => ({
            ...prevState,
            [path]: e.target.value
        }));
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <label>
                Nom <input type={"text"} value={contactMsg.nom} onChange={(e) => handleChangeVal(e, 'nom')}/>
            </label>
            <label>
                Email <input type={"email"} value={contactMsg.email} onChange={(e) => handleChangeVal(e, 'email')}/>
            </label>
            <label>
                Message <textarea value={contactMsg.message} onChange={(e) => handleChangeVal(e, 'message')}/>
            </label>
            <input type={"submit"} value={"Envoyer"}/>
        </form>
    )
}

export default ContactForm;