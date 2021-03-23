import React from 'react';
import CardDeck from 'react-bootstrap/Card';
import Cards from '../components/Blog/Cards';
import '../styles/Blog/Blog.css'


const Blog = () => {
    return (
        <>
            <h1 className="BlogHeadline"> Pourquoi un Blog ? </h1>
            <p className="BlogDesc">​Un blog est un moyen singulier et pratique pour pratiquer une veille technologique sur le milieu du développement notamment Web. Il est donc intéressant de synthétiser les informations et de les transmettre pour continuer de faire évoluer ses compétences 
                En effet, la veille technologique consiste à s’informer de façon systématique sur les nouvelles techniques dans le but d’être toujours au courant des dernières avancées technologiques ainsi qu’être le meilleur dans son domaine professionnel. Aujourd’hui, la veille technologique possède une place majeure dans le travail d’un développeur.
            </p>
            <CardDeck>
                <Cards/>
            </CardDeck>            
        </>
    );
};

export default Blog;