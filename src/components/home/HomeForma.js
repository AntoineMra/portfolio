import React from 'react'
import { Row } from 'react-bootstrap'

const formaData = [
  {
    id: 1,
    title: 'LP Informatique - Applications Web',
    date: 'De Septembre 2021 au 31 août 2022',
    descMain: `​J'ai eu la chance d'intégrer une licence professionnelle spécialisée dans le développement Web FullStack.`,
    desc1: '- Développement Back-End : PHP/Symfony',
    desc2: '- Développement Front-End : React/Angular',
    desc3: '- Compétence Web Complémentaire : SEO/UX/PWA/WebDesign',
  },
  {
    id: 2,
    title: 'BTS SIO - Option SLAM',
    date: 'De Septembre 2019 à Mai 2021',
    descMain: `​J'ai suivi une formation en BTS SIO option Solutions Logicielles et Applications métiers. J'ai pu assimiler plusieurs notions clés :`,
    desc1: '- Apprentissage de la Programmation Orienté Objet',
    desc2: '- Développement Web avec le framework Symfony',
    desc3:
      "- Initiation au développement d'applications client Lourd et Mobile",
  },
]

const HomeForma = () => {
  return formaData.map((forma) => {
    return (
      <Row className='containerText' key={forma.id}>
        <h3 className='formaTitle'>{forma.title}</h3>
        <i className='formaDate'>{forma.date}</i>
        <p className='formaDesc'>{forma.descMain}</p>
        <ul>
          <li className='formaList'>{forma.desc1}</li>
          <li className='formaList'>{forma.desc2}</li>
          <li className='formaList'>{forma.desc3}</li>
        </ul>
      </Row>
    )
  })
}

export default HomeForma
