import React from 'react';
import { Container, Row , Col} from 'react-bootstrap';

const HomeDesc = () => {
    return ( 
        <section className="HomeDesc">
            <Container>
                <Row>
                    <Col xs={{span: 7 , offset: 1}}>
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
                    <Col xs={{span:3 , offset: 1}}>
                        <img src="./media/pdp.png" alt="aa" className="profilePhoto"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HomeDesc;