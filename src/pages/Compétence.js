import React from 'react';
import '../styles/Compétence/Compétence.css'
import { Container, Row, Col } from 'react-bootstrap';
import MainBox from '../components/Compétence/MainBox';
import SecondaryBox from '../components/Compétence/secondaryBox';


const Compétence = () => {
    return (
        <section className="compPage">
            <h1 className="compTitle">Compétences</h1>
            <Container>
                <Row>
                    <Col md={{ span: 6}}>
                        <MainBox
                        type="langages"
                        desc="Je maîtrise les différents langages Web : HTML, CSS, PHP et JS. Lors de mon stage, mes connaissances ont été mis en pratique pour répondre à une situation professionnelle concrète. "
                        />
                    </Col>
                    <Col md={{ span: 6}}>
                        <MainBox
                        type="framework"
                        desc="Mon BTS SIO m'a permis d'acquérir une solide base de compétence dans le Framework Symfony et me familiariser avec le Back-end. Aussi, mon appétence pour les technologies Web m'ont poussé à apprendre React"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 7}} style={{margin: '2rem 0px'}}>
                        <SecondaryBox type="autres compétences"/>
                    </Col>
                    <Col md={{ span: 5}} style={{margin: '2rem 0px'}}>
                        <SecondaryBox type="Centres d'intérêt"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Compétence;