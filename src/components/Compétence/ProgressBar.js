import React from 'react';
import '../../styles/Compétence/MainBox.css'


function ProgressBar(props) {
    return(
    props.array.map(lang => {
    return (
        <>
            <div className="progressRow" key={lang.id}>
                <label>{lang.name}</label>
                <div className="progressBar" data-label={lang.pct}></div>
            </div>
        </>
    );
    })
    )
}

export default ProgressBar;