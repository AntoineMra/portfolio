import React from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/Compétence/SecondaryBox.css'


const compBox = (props) => {
    return(
    props.array.map(item => {
        return (           
            <React.Fragment key={item.id}>
                    <Col md={{ span: 6}}>
                        <div className="compRow">
                            <i className="far fa-check-circle fa-lg"></i>
                            <span className="compItem">{item.name}</span>
                        </div>
                    </Col>
            </React.Fragment>
        );
    })
    )
};

export default compBox;