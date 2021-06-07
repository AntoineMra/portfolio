import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProjetSco from '../../components/BTS/ProjetsSco'
import '../../styles/BTS/btsProjets.css'

const BtsProjets = () => {
  return (
    <section>
      <h1 className='btsTitle'>Mes projets scolaires</h1>
      <Container>
        <Row>
          <div className='projects' style={{ width: '100%' }}>
            <ProjetSco
              titre='GSB'
              desc="L'application GSB est une application Web destinée à renseigner et consulter les fiches de frais des différents visiteurs. 
              En plus de pouvoir les ajouter, le visiteur a accès à l'historique de tout les frais renseignés. "
              contexte="
              Le laboratoire Galaxy Swiss Bourdin (GSB) est issu de la fusion entre le géant américain Galaxy (spécialisé dans le secteur des maladies virales dont le SIDA et les hépatites) et le conglomérat européen Swiss Bourdin (travaillant sur des médicaments plus conventionnels), lui même déjà union de trois petits laboratoires .
              En 2009, les deux géants pharmaceutiques ont uni leurs forces pour créer un leader de ce secteur industriel. L'entité Galaxy Swiss Bourdin Europe a établi son siège administratif à Paris. 
              L'équipe développement aura notamment à produire puis à fournir les éléments applicatifs permettant l'enregistrement d'informations en provenance des visiteurs et la gestion des frais de déplacement"
              comp={[
                "A1.1.1 , Analyse du cahier des charges d'un service à produire",
                "A1.3.1 , Test d'intégration et d'acceptation d'un service ",
                "A4.1.1 , Proposition d'une solution applicative ",
                "A4.1.2 , Conception ou adaptation de l'interface utilisateur d'une solution applicative ",
                "A4.1.3 , Conception ou adaptation d'une base de données ",
                "A4.1.6 , Gestion d'environnements de développement et de test ",
              ]}
              img1='./media/gsb1.PNG'
              img2='./media/gsb2.PNG'
              file='./media/'
              nb={0}
            />
          </div>
          <div className='projects' style={{ width: '100%' }}>
            <ProjetSco
              titre='Localux'
              desc={`Réalisation d'une API pour une application mobile de réservation de location de véhicule. L'utilisateur choisi la date de son trajet et choisi une véhicule pour effectuer sa location.`}
              contexte="Localux est spécialisée dans la location de véhicules haut de gamme et de luxe, avec chauffeur. La société propose des courses sur Paris et sa périphérie avec des trajets prédéfinis (d’un lieu de départ à un lieu de destination) comme, par exemple, Paris-Versailles, Paris-Deauville, Paris-Fontainebleau, Paris-Chantilly. 
              L'entreprise a choisi de développer une application mobile pour effectuer ses réservations de véhicule avec chauffeur.
              "
              comp={[
                'Elaboration de documents relatifs à la production et à la fourniture de services',
                "A1.1.1 , Analyse du cahier des charges d'un service à produire",
                "A4.1.1 , Proposition d'une solution applicative ",
                "A4.1.2 , Conception ou adaptation de l'interface utilisateur d'une solution applicative ",
                "A4.1.3 , Conception ou adaptation d'une base de données ",
                "A4.1.10 ,  Rédaction d'une documentation d'utilisation  ",
                "A5.2.4 , Étude d˜une technologie, d'un composant, d'un outil ou d'une méthode ",
              ]}
              img1='./media/localux1.PNG'
              img2='./media/localux2.PNG'
              file='./media/doc.pdf'
              nb={8}
            />
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default BtsProjets
