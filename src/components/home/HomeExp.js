import React from 'react'

const expData = [
  {
    id: 1,
    title: 'Alternant Intégrateur Web - Groupe Dubreuil',
    date: 'De Septembre 2021 à Septembre 2022',
    descMain:
      "J'ai intégré la Holding du Groupe Dubreuil pour y réaliser l'intégration des projets Web des filiales du Groupe Dubreuil",
    desc1: '- Intégration maquette : Twig/Sass',
    desc2: '- Templating CMS via Framework Interne PHP',
    desc3:
      '- Créer des sites responsive, mobile-first, optimisés et user-friendly',
  },
  {
    id: 2,
    title: 'Stage - AÏOLI DIGITAL',
    date: 'De Janvier 2021 à Février 2021',
    descMain:
      "Lors de mon stage dans l'agence Aïoli Digital j'ai développer une application Web pour la ville des Sables d'Olonne.",
    desc1: "- Mise en place d'un site Web avec CMS WordPress",
    desc2: '- Template WordPress PHP et Intégration CSS / JavaScript',
    desc3: '- Utilisation de JavaScript ES6 / Async ',
  },
]

const HomeExp = () => {
  return expData.map((exp) => {
    return (
      <div className='containerText' key={exp.id}>
        <h3 className='expTitle'>{exp.title}</h3>
        <i className='expDate'>{exp.date}</i>
        <p className='expDesc'>{exp.descMain}</p>
        <ul>
          <li className='expList'>{exp.desc1}</li>
          <li className='expList'>{exp.desc2}</li>
          <li className='expList'>{exp.desc3}</li>
        </ul>
      </div>
    )
  })
}

export default HomeExp
