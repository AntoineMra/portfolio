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
                        />
                    </Col>
                    <Col md={{ span: 6}}>
                        <MainBox
                        type="framework"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 7}} style={{margin: '50px 0px'}}>
                        <SecondaryBox type="autres compétences"/>
                    </Col>
                    <Col md={{ span: 5}} style={{margin: '50px 0px'}}>
                        <SecondaryBox type="Centres d'intérêt"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Compétence;