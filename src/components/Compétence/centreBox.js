import React from 'react';

const centreBox = (props) => {
    return(
    props.array.map(item => {
        return (           
            <React.Fragment  key={item.id}>
                <div className="compRow">
                    <i className={item.class}></i>
                    <span className="compItem">{item.name}</span>
                </div>
            </React.Fragment>
        );
    })
    )
};

export default centreBox;