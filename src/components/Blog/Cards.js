import React from 'react'
import Card from 'react-bootstrap/Card'
import { Col } from 'react-bootstrap'
import blogItems from './dataBlog'

const Cards = function () {
  return blogItems.map((items, index) => {
    return (
      <Col key={index} md={4}>
        <Card>
          <Card.Body>
            <h5>{'Article ' + items.id + ' :'}</h5>
            <Card.Title className='artTitle'>{items.title}</Card.Title>
            <Card.Subtitle className='artSubTitle text-muted'>
              {items.dateArt}
            </Card.Subtitle>
            <Card.Subtitle className='artSubTitle text-muted'>
              {items.year}
            </Card.Subtitle>
            <Card.Subtitle className='artSubTitle text-muted'>
              {items.url}
            </Card.Subtitle>
            <Card.Subtitle className='artSubTitle text-muted'>
              {items.tags}
            </Card.Subtitle>
            <Card.Subtitle className='artSubTitle text-muted'>
              {items.reference}
            </Card.Subtitle>
            <Card.Text>{items.body}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  })
}

export default Cards
