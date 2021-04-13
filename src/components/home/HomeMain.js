import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';

const HomeMain = () => {
    return (
        <section className="HomePage">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="nameTitle">Antoine Marionneau</h1>
                            <h2 className="jobTitle">Développeur Web</h2>           
                        </Col>
                    </Row>
                </Container>
            </section>
    );
}
export default HomeMain