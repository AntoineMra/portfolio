import React from 'react';
import '../../styles/Compétence/MainBox.css'


function ProgressBar(props) { 

    return(
    props.array.map(lang => {
        return (           
            <React.Fragment key={lang.id}>
                <div className="progressRow">
                    <label className="itemLabel">{lang.name}</label>
                    <div className="progressBar" style={{"--width": lang.pct}} data-label={lang.pct + '% '}></div>
                </div>
            </React.Fragment>
        );
    })
    )
           
}

export default ProgressBar;