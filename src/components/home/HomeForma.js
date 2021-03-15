import React from 'react';
import { Row } from "react-bootstrap";

const formaData = [
    {
        id: 1,
        title: 'BTS - Service Informatique aux Organisations',
        date: "De Septembre 2019 à Aujourd'hui",
        desc: "​Je suis en cours de formation en BTS SIO option Solutions Logicielles et Applications métiers au lycée Savary de Mauléon, les Sables d'Olonnes."
    },
    {
        id: 2,
        title: "Baccalauréat Scientifique",
        date: 'De Septembre 2015 à Juillet 2018',
        desc: "J'ai obtenu mon Bac Scientifique avec Option ISN où j'ai pratiquer mes premières bases d'informatique."
    
    },
]

const HomeForma = () => {
    return(
        formaData.map((forma,index) => 
            {
                return(
                    <Row className="formaContainer" key={index}>
                        <h3 className="formaTitle">{forma.title}</h3>
                        <i className="formaDate">{forma.date}</i>
                        <p className="formaDesc">{forma.desc}</p>
                    </Row>
                )
            }
        ) 
    );
};

export default HomeForma;