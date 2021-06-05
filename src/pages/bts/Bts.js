import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/BTS/btsHome.css'



const Bts = () => {
    return (
        <section>
            <h1 className="btsTitle">Présention du BTS SIO</h1> 
            <Container>
                <Row>
                    <div className="btsDesc">
                        <p>Le BTS Services Informatiques aux Organisations est un diplôme reconnu par l’état de niveau Bac+2. La formation propose deux spécialités bien distinctes : le BTS SIO SISR et le BTS SIO SLAM.
                            Il associe aux enseignements théoriques et professionnels deux stages en entreprise .
                            En plus des matières informatiques, la formation propose également des enseignements de culture générale, d’anglais, de mathématiques appliquées à l’informatique. 
                        </p>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <div className="BoxBts">
                            <Row>
                                <h2 className="btsTitleDesc">Parcours SISR</h2>
                                <p style={{margin: "1rem 3rem"}}>
                                    L’option Solutions d’infrastructure, systèmes et réseaux forme des professionnels des réseaux et équipements informatiques (installation, maintenance, sécurité). En sortant d’un BTS SIO SISR, l'étudiant est capable de gérer et d’administrer le réseau d’une société et d’assurer sa sécurité et sa maintenance.
                                </p>
                            </Row>
                        </div>
                    </Col>
                    <Col>
                        <div className="BoxBts">
                            <Row>
                                <h2 className="btsTitleDesc">Parcours SLAM</h2>
                                <p style={{margin: "1rem 3rem"}}>
                                    L'option Solution Logicielles et applications métiers permet la conception et le développement d'applications : Nous participons à la conception, au développement, au déploiement et à la maintenance des composants logiciels d'une solution applicative. Nous disposons de connaissances en bases de données et en gestion des données numériques.
                                </p>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h3 className="btsTitleDesc" style={{margin: "2rem", fontSize: "36px"}}>Mon portfeuille de compétence E6</h3>
                    <img src="./media/e6.PNG" alt="Portfeuille de compétence E6" className="e6Tab"/>
                </Row>
            </Container>
        </section>
    );
};

export default Bts;