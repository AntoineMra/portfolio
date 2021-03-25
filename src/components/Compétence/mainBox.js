import React from 'react';
import ProgressBar from './ProgressBar';

const langages = [
    {id: 1 , name: 'JavaScript' , pct: ''},
    {id: 2 , name: 'PHP' , pct: ''},
    {id: 3 , name: 'HTML/CSS' , pct: ''},
    
]
const framework = [
    {id: 1 , name: 'React' , pct: ''},
    {id: 2 , name: 'Symfony' , pct: ''},
    {id: 3 , name: 'Bootstrap' , pct: ''},
    {id: 4 , name: 'Ionic' , pct: ''},
]


const MainBox = (props) => {
    if (props.type === "langages") {
        var array = langages
    } else {
        array = framework
    }
    return (
        <div>
            <ProgressBar
            array={array}
            title={props.type}
            />
        </div>
    );
};

export default MainBox;