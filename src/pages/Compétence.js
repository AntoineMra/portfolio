import React from 'react';
import '../styles/Compétence/Compétence.css'
import { Container, Row, Col } from 'react-bootstrap';
import MainBox from '../components/Compétence/MainBox';


const Compétence = () => {
    return (
        <section className="compPage">
            <h1 className="compTitle">Compétences
            </h1>
            <Container>
                <Row>
                    <Col xs={{ span: 4, offset: 1 }}>
                        <MainBox
                        type="langages"
                        />
                    </Col>
                    <Col xs={{ span: 4, offset: 1 }}>
                        <MainBox
                        type="framework"
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Compétence;