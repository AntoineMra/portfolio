import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import HomeExp from './HomeExp';
import HomeForma from './HomeForma';

const HomeResume = () => {
    return (
        <section className="HomeResume">
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className="formaHeading">
                            formation
                        </h1>
                        <HomeForma/>
                    </Col>
                    <Col md={6}>
                        <h1 className="expHeading">
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