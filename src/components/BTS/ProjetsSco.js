import React from 'react'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ProjetsSco = (props) => {
  return (
    <div>
      <h4 style={{ textAlign: 'center' }}>Mon projet {props.titre}</h4>
      <h6 className='btsUnderHeading'>Description du projet :</h6>
      <p className='btsDescPro'>{props.desc}</p>
      <h6 className='btsUnderHeading'>Contexte :</h6>
      <p className='btsDescPro'>{props.contexte}</p>
      <h6 className='btsUnderHeading'>Compétence du projet :</h6>
      <ul>
        {props.comp.map((compet, index) => {
          return (
            <li className='btsUnderHeading' key={index + props.nb}>
              {compet}
            </li>
          )
        })}
      </ul>
      <h6 className='btsUnderHeading'>Productions Associées :</h6>
      <Row>
        <Col>
          <img
            className='imgProd'
            src={props.img1}
            alt={'Image1 production' + props.titre}
          />
        </Col>
        <Col>
          <img
            className='imgProd'
            src={props.img2}
            alt={'Image2 production' + props.titre}
          />
        </Col>
      </Row>
      <a
        href={props.file}
        target='_blank'
        rel='noreferrer'
        className='cvFile'
        style={{ margin: '4% 40%' }}
      >
        Production
      </a>
    </div>
  )
}

ProjetsSco.propTypes = {
  contexte: PropTypes.string,
}

export default ProjetsSco
