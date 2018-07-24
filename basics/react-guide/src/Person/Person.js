import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.changeNameClick}>I'm {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.typedName} value={props.name}/>
        </div>
    )
};

export default person;