import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col} from 'react-bootstrap';
import blogItems from './dataBlog'

const Cards = function() {
    return (
            blogItems.map((items,index) => 
            {
               return(
                <div key={index}>
                    <Col xs={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{items.title}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </div>
               ) 
            }
        ) 
    );
};

export default Cards;
