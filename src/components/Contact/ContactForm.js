import React, { useState } from 'react';
import { Toast } from "react-bootstrap";
import '../../styles/Contact/ContactForm.css'


const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (event) => {

        event.preventDefault();

        const isEmail = () => {
            let mail = document.getElementById('not-mail')
            let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            if (email.match(regex)) {
                mail.style.display = 'none'
                return true
            }
            else{
                mail.style.display = 'block';
                return false
            }
        }
        
        if (name && isEmail() && message) {
            sendFeedback("template_bf46j2e" , {name, email,message})
        } 
        else {
            
        }


    }

    const sendFeedback = (templateId , vars ) => {
        window.emailjs.send("service_ynfnqwb",templateId ,vars)
        .then((res) => {
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
                            required
                        />
                    </div>
                   

                    <div className="formRow">
                        <label className="labelForm" htmlFor="email"> Votre Mail </label>
                        <input
                            className="inputForm"
                            type="mail"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="johndoe@test.com"
                            value={email}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="formError">
                        <Toast>
                            <Toast.Body id="not-mail" >Email non valide</Toast.Body>
                        </Toast>
                    </div>
                    <div className="formRow">
                        <label className="labelForm" htmlFor="message"> Votre Message</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            required
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