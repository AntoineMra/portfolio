import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../../styles/Home/Home.css'


const Home = () => {
    return (
            <section className="HomePage">
                <Container>
                    <Row>
                        <Col xs={4}>
                            
                            <img src="./media/pdp.png" alt="aa"/>
                            <h1>Antoine Marionneau</h1>
                            <h2>Développeur Web</h2>
                            
                        </Col>
                        <Col xs={8}>
                            <h5>Qui je suis </h5>
                            <p>

                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Home;