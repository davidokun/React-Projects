import React from 'react';
import './Char.css';

const Char = (props) => {

    return (
        <div className="CharComponent" onClick={props.remove}>
            {props.value}
        </div>
    );
};

export default Char;