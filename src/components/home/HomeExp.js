import React from 'react';
import { Row } from "react-bootstrap";

const expData = [
    {
        id: 1,
        title: 'Stage - AÏOLI DIGITAL',
        date: 'De Janvier 2021 à Février 2021',
        descMain: "Lors de mon stage dans l'agence Aïoli Digital j'ai développer une application Web pour la ville des Sables d'Olonne.",
        desc1: "- Mise en place d'un site Web avec CMS WordPress",
        desc2: "- TemplateWordPress PHP et Intégration CSS / JavaScript",
        desc3: "- Utilisation de JavaScript ES6 / Async ",
    },
    /*{
        id: 2,
        title: 'MERCEDES-SAGA',
        date: 'De Juillet 2019 à Août 2019',
        desc: "Manutentionnaire dans le cadre d'un déménagement d’entrepôt chez Mercedes SAGA. J'ai pu y développé une autonomie dans mon travail et un savoir-être en entreprise "
    },
    */
]


const HomeExp = () => {
    return(
        expData.map((exp,index) => 
            {
                return(
                    <Row className="expContainer" key={exp.id}>
                        <h3 className="expTitle">{exp.title}</h3>
                        <i className="expDate">{exp.date}</i>
                        <p className="expDesc">{exp.descMain}</p>
                        <ul>
                            <li className="expList">{exp.desc1}</li>
                            <li className="expList">{exp.desc2}</li>
                            <li className="expList">{exp.desc3}</li>
                        </ul>                        
                    </Row>
                )
            }
        ) 
    );
};

export default HomeExp;