import React from 'react';
import '../styles/Compétence/Compétence.css'
import { Container, Row, Col } from 'react-bootstrap';
import MainBox from '../components/Compétence/MainBox';


const Compétence = () => {
    return (
        <section className="compPage">
            <h1 className="compTitle">Compétences</h1>
            <h4 className="compSubTitle">Vous pouvez découvrir mes aptitudes </h4>

            <Container>
                <Row>
                    <Col xs={{ span: 5}}>
                        <MainBox
                        type="langages"
                        />
                    </Col>
                    <Col xs={{ span: 5}}>
                        <MainBox
                        type="framework"
                        />
                    </Col>
                    <Col xs={{ span: 2}}>
                        <img src="./media/codein.png" alt="percentageDashboard" className="SideImg"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Compétence;