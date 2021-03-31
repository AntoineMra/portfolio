import React from 'react';
import ProjectList from '../components/Projets/ProjectList';
import '../styles/Projets/Projets.css'


const Projets = () => {
    return (
        <section className="projetPage">
            <h1 className="projetTitle">Projets</h1>
            <h4 className="projetSubTitle"> Voici les derniers projets que j'ai pu créer </h4>
            <ProjectList/>
        </section>
    );
};

export default Projets;