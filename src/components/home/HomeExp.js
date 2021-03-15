import React from 'react';
import { Row } from "react-bootstrap";

const expData = [
    {
        id: 1,
        title: 'Stage - AÏOLI DIGITAL',
        date: 'De Janvier 2021 à Février 2021',
        desc: "Mise en place d'un site Web avec CMS WordPress Développement Plugins et Template PHP Intégration CSS / JavaScript"
    },
    {
        id: 2,
        title: 'MERCEDES-SAGA',
        date: 'De Juillet 2019 à Août 2019',
        desc: "Manutentionnaire dans le cadre d'un déménagement d’entrepôt chez Mercedes SAGA"
    },
]


const HomeExp = () => {
    return(
        expData.map((exp,index) => 
            {
                return(
                    <Row className="expContainer" key={index}>
                        <h3 className="expTitle">{exp.title}</h3>
                        <i className="expDate">{exp.date}</i>
                        <p className="expDesc">{exp.desc}</p>
                    </Row>
                )
            }
        ) 
    );
};

export default HomeExp;