import React from 'react';
import { Col } from 'react-bootstrap';
import '../../styles/Compétence/SecondaryBox.css'


const compBox = (props) => {
    return(
    props.array.map(item => {
        return (           
            <>
                <Col md={{ span: 6}}>
                    <div className="compRow" key={item.id}>
                        <i className="far fa-check-circle fa-lg"></i>
                        <label className="compItem">{item.name}</label>
                    </div>
                </Col>
            </>
        );
    })
    )
};

export default compBox;