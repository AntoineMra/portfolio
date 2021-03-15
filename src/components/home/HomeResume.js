import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import HomeExp from './HomeExp';
import HomeForma from './HomeForma';

const HomeResume = () => {
    return (
        <section className="HomeResume">
            <Container>
                <Row>
                    <Col className="formationContainer">
                        <h1 style={{textTransform: 'uppercase'}}>
                            formation
                        </h1>
                        <HomeForma/>
                    </Col>
                    <Col className="expContainer">
                        <h1 style={{textTransform: 'uppercase'}}>
                            expérience
                        </h1>
                        <HomeExp/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeResume;