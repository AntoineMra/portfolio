import React from 'react'
import { Container } from 'react-bootstrap'
import '../../styles/BTS/btsStage.css'

const BtsStage = () => {
  return (
    <>
      <Container>
        <section className='projects'>
          <h1 className='btsTitle'>Stage AÏOLI DIGITAL</h1>
          <p style={{ textAlign: 'center', width: '70%', marginLeft: '15%' }}>
            Lors de mon stage de deuxième année de BTS SIO, j'ai eu la chance
            d'être accueilli dans l'agence de communication Aïoli Digital basée
            aux Sables d'Olonne. Accompagné de mon camarade{' '}
            <span style={{ textDecoration: 'underline' }}>
              <a
                href='https://sites.google.com/view/matheocoquel-portfolio'
                target='_blank'
                rel='noreferrer'
              >
                Mathéo Coquel
              </a>
            </span>
            , nous sommes venus renforcer une équipe de deux développeurs.
            L'agence est spécialisé dans la communication digital pour les
            entreprises et est ainsi dotée d'un pôle développement.
          </p>
          <a
            href='https://apprentissage-lessablesdolonne.com/'
            target='_blank'
            rel='noreferrer'
            className='cvFile'
            style={{ margin: '4% 40%' }}
          >
            Accéder au projet
          </a>
        </section>
        <section className='projects'>
          <h3 className='stageUnderTitle'>Intégration dans l'entreprise</h3>
          <p className='stageTextDesc'>
            Ma première semaine de stage était une semaine d'intégration au
            fonctionnement des différentes entités de l'agence d'une part, des
            technologies utilisé et des méthodes de compte-rendu à mon maître de
            stage.
          </p>
          <br />
          <p className='stageTextDesc'>
            L'agence fonctionne avec plusieurs pôles de compétences. Le pôle
            communication établie en collaboration avec le design une maquette
            pour les sites web. Une fois celle-ci validée par le client, elle
            est transmise au service développement.
          </p>
        </section>
        <section className='projects'>
          <h3 className='stageUnderTitle'>Contexte Professionnel</h3>
          <p className='stageTextDesc'>
            Création de la partie front-end du projet SEM en collaboration avec
            la ville des Sables d’Olonne. Elle est constitué de trois page Web
            qui doivent correspondre à la maquette que l'on m'a donnée.
          </p>
          <br />
          <p className='stageTextDesc'>
            L'agence fonctionne avec plusieurs pôles de compétences. Le pôle
            communication établie en collaboration avec le design une maquette
            pour les sites web. Une fois celle-ci validée par le client, elle
            est transmise au service développement.
          </p>
          <a
            href='https://xd.adobe.com/view/40903329-71f5-4d0c-8266-6bb1f5309f6a-15c3/'
            target='_blank'
            rel='noreferrer'
            className='cvFile'
            style={{ margin: '4% 40%' }}
          >
            Découvrir la maquette
          </a>
        </section>
        <section className='projects'>
          <h3 className='stageUnderTitle'>Projet Dermoscent</h3>
          <p className='stageTextDesc'>
            J'ai repris l'application du site Dermoscent en cours de
            développement. La gestion de nombreux retour client était nécéssaire
            car le rendu devait se fier à la maquette avec précision. Ainsi nous
            avons produit de nombreux correctifs.
          </p>
          <br />
          <p className='stageTextDesc'>
            Dermoscent est spécialiste français de la dermo-cosmétique animale.
            Le projet Dermoscent comprend un site de conseil vétérinaire et un
            site e-commerce de vente de produits animaliers.
          </p>
          <a
            href='https://www.dermoscent.com'
            target='_blank'
            rel='noreferrer'
            className='cvFile'
            style={{ margin: '4% 40%' }}
          >
            Découvrir le site
          </a>
        </section>
      </Container>
    </>
  )
}

export default BtsStage
