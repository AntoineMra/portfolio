import React from 'react'
import CompBox from './compBox'
import { Row } from 'react-bootstrap'
import CentreBox from './centreBox'

const comp = [
  { id: 1, name: 'Versionning Git' },
  { id: 2, name: 'Docker - En cours' },
  { id: 3, name: 'Anglais Courant' },
  { id: 4, name: 'UI/UX Design' },
]
const centre = [
  { id: 1, name: 'Histoire', class: 'fas fa-landmark' },
  { id: 2, name: 'Football Américain', class: 'fas fa-football-ball' },
  { id: 3, name: 'Basketball', class: 'fas fa-basketball-ball' },
]

const secondaryBox = (props) => {
  var isComp = false
  if (props.type === 'autres compétences') {
    var array = comp
    isComp = true
  } else {
    array = centre
  }
  return (
    <>
      <div className='Box'>
        <h2 className='menuSubTitle'>{props.type}</h2>
        {isComp ? (
          <Row>
            <CompBox array={array} />{' '}
          </Row>
        ) : (
          <CentreBox array={array} />
        )}
      </div>
    </>
  )
}

export default secondaryBox
