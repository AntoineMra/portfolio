import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CardDeck from 'react-bootstrap/Card'
import Cards from '../../components/Blog/Cards'
import '../../styles/BTS/btsVeille.css'

const BtsVeille = () => {
  return (
    <>
      <Container>
        <h1 className='blogTitle'> Pourquoi une Veille ? </h1>
        <p className='BlogDesc'>
          La veille technologique consiste à s’informer de façon systématique
          sur les nouvelles techniques dans le but d’être toujours au courant
          des dernières avancées technologiques ainsi qu’être meilleur dans son
          domaine professionnel. Aujourd’hui, la veille technologique possède
          une place majeure dans le travail d’un développeur.
          <br />
          <br />
          Le blog est un moyen pour pratiquer une veille technologique et la
          transmettre sur le milieu du développement notamment Web. Il est donc
          intéressant de synthétiser les informations et de les transmettre pour
          continuer de faire évoluer ses compétences.
        </p>
        <CardDeck>
          <Row>
            <Cards />
          </Row>
        </CardDeck>
      </Container>
    </>
  )
}

export default BtsVeille
