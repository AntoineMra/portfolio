import React from 'react';

const centreBox = (props) => {
    return(
    props.array.map(item => {
        return (           
            <React.Fragment  key={item.id}>
                <div className="compRow">
                    <i className={item.class}></i>
                    <label className="compItem">{item.name}</label>
                </div>
            </React.Fragment>
        );
    })
    )
};

export default centreBox;