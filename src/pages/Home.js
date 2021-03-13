import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/Home/Home.css'


const Home = () => {
    return (
            <section className="HomePage">
                <Container>
                    <Row>
                        <Col xs={4}>
                            <div className="profileContainer">
                                <img src="./media/pdp.png" alt="aa" className="profilePhoto"/>
                                <h1 className="nameTitle">Antoine Marionneau</h1>
                                <h2 className="jobTitle">Développeur Web</h2>
                            </div>           
                        </Col>
                        <Col xs={{ span: 6, offset: 2 }}>
                            <h5 className="descTitle"> Qui je suis </h5>
                            <p className="descript">
                                Bonjour, j'ai commencé le développement et j'ai entamé un parcours professionnel pour atteindre mon objectif : me spécialiser dans le Web. 
                                <br/><br/>
                                Je me suis tourné vers les études d'informatiques et particulièrement le développement en 2019. Je n'ai pas eu besoin de beaucoup de temps pour comprendre que je pourrai faire de cette passion mon métier. 
                                <br/><br/>
                                Je suis maintenant étudiant depuis 2 ans en BTS SIO option SLAM. De plus, j'affectionne particulièrement découvrir de moi-même d'autre technologies pour compléter mes compétences. 
                                <br/><br/>
                                Je suis également à la recherche d'une alternance dans le développement web pour la suite de mon parcours alors n'hésitez pas à me contacter.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
    );
};

export default Home;