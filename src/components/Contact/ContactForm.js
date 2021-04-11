import React, { useState } from 'react';
import '../../styles/Contact/ContactForm.css'


const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        sendFeedback("template_bf46j2e" , {name , email ,message})
    }

    const sendFeedback = (templateId , vars ) => {
        window.emailjs.send("gmail" , templateId , vars)
        .then(() => {
            setName("");
            setEmail("");
            setMessage("");
        })
        .catch((err) => {console.log(err);})
    }

    return (
        <div>
            <form className="contactForm">
                <div className="formContent">
                    <h4 className="formTitle">Envie d'en savoir plus ?</h4>
                    <div className="formRow">
                        <label className="labelForm" htmlFor="name">Votre Nom</label>
                        <input
                            className="inputForm"
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Doe"
                            value={name}
                            autoComplete="off"
                        />
                    </div>
                   

                    <div className="formRow">
                        <label id="not-mail">Email non valide</label>
                        <label className="labelForm" htmlFor="email"> Votre email </label>
                        <input
                            className="inputForm"
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="johndoe@test.com"
                            value={email}
                            autoComplete="off"
                        />
                    </div>
                    <div className="formRow">
                        <label className="labelForm" htmlFor="message"> Votre message</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </div>
                    <div className="submit">
                        <input
                            className="subButton"
                            type="button"
                            value="Envoyer"
                            onClick={handleSubmit}
                        />
                        <div className="form-message"></div>
                    </div>

                </div>
            </form>
        </div>
    );
    
};

export default ContactForm;