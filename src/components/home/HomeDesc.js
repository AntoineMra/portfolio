import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Row , Col} from 'react-bootstrap';

const HomeDesc = () => {
    return ( 
        <section className="HomeDesc">
            <Container>
                <Row>
                    <Col md={{span: 7 , offset: 1}}>
                        <h5 className="descTitle"> Qui suis-je ? </h5>
                        <p className="descTexte">
                            J'ai commencé le développement il y a maintenant 2 ans et j'ai entamé un parcours professionnel pour atteindre mon objectif :<b style={{color: '#DC7633'}}> me spécialiser dans le Web</b>. 
                            <br/><br/>
                            Je me suis tourné vers les études d'informatique et particulièrement le développement en 2019. Je n'ai pas eu besoin de beaucoup de temps pour comprendre que je pourrais faire de cette passion <b style={{color: '#DC7633'}}>mon métier</b>. 
                            <br/><br/>
                            Je suis maintenant étudiant en BTS SIO option SLAM. De plus, j'affectionne particulièrement découvrir de moi-même d'autres technologies pour compléter <br/> <NavLink exact to="/skills"> <b style={{color: '#DC7633'}}> mes compétences</b> </NavLink>. 
                            <br/><br/>
                            Je suis également à la recherche d'une alternance dans le développement web pour la suite de mon parcours alors <NavLink exact to="/contact"><b style={{color: '#DC7633'}}> n'hésitez pas à me contacter</b></NavLink>.
                        </p>
                    </Col>
                    <Col md={{span:3 , offset: 1}}>
                        <img src="./media/pdp.JPG" alt="Profil Face" className="profilePhoto"/>
                    </Col>
                </Row>
                <Row>
                    <a href="./media/CV_Antoine_Marionneau.pdf" target="_blank" className="cvFile">Télécharger mon CV</a>
                </Row>
            </Container>
        </section>
    );
};

export default HomeDesc;