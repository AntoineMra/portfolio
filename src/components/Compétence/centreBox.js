import React from 'react';

const centreBox = (props) => {
    return(
    props.array.map(item => {
        return (           
            <>
                <div className="compRow" key={item.id}>
                    <i className={item.class}></i>
                    <label className="compItem">{item.name}</label>
                </div>
            </>
        );
    })
    )
};

export default centreBox;