import React from 'react'
import ProgressBar from './ProgressBar'
import '../../styles/Compétence/MainBox.css'

const langages = [
  { id: 1, name: 'JavaScript', pct: '80' },
  { id: 2, name: 'PHP', pct: '75' },
  { id: 3, name: 'HTML/CSS', pct: '100' },
  { id: 4, name: 'SQL', pct: '60' },
]
const framework = [
  { id: 1, name: 'React', pct: '70' },
  { id: 2, name: 'Symfony', pct: '80' },
  { id: 3, name: 'Angular', pct: '60' },
  { id: 4, name: 'WordPress', pct: '85' },
]

const MainBox = (props) => {
  if (props.type === 'langages') {
    var array = langages
  } else {
    array = framework
  }
  return (
    <div className='Box'>
      <h2 className='menuSubTitle'>{props.type}</h2>
      <h5 className='boxDesc'>{props.desc}</h5>
      <ProgressBar array={array} />
    </div>
  )
}

export default MainBox
