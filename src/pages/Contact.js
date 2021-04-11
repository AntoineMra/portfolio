import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/Contact/ContactForm';
import '../styles/Contact/ContactPage.css'


const contact = () => {
    return (
        <section>
            <h1 className="contactTitle">Contact</h1> 
            <Container>
                <Row>
                    <Col md={8}>
                        <ContactForm />
                    </Col>
                    <Col md={4}>
                        <img className="contactIllus" src="./media/contactImg.svg" alt=" Contact illustration"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default contact;