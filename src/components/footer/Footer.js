import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import '../../styles/Footer/Footer.css'

const Footer = () => {
    return (
        <div className="footerRow">
            <Container>
                <Row>
                    <Col>
                    <h5 className="devlo">Développé par Antoine Marionneau</h5>
                    </Col>
                    <Col>
                    <ul class="footerIcons">
                        <li class="socialIcons">
                            <a href="https://github.com/AntoineMra" style={{color: '#ddd'}}>
                                <i class="fab fa-github fa-2x"></i>
                            </a>
                        </li>
                        <li class="socialIcons">
                            <a href="https://www.linkedin.com/in/antoine-marionneau/" style={{color: '#ddd'}}>
                                <i class="fab fa-linkedin-in fa-2x">
                                </i>
                            </a>
                        </li>
                    </ul>
                    </Col>
                    <Col>
                    <h5 className="copy">Antoine Marionneau | Tout droits réservés | 2021</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;