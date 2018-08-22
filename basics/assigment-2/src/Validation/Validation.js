import React from 'react';

const Validation = (props) => {

    let message = 'Text long enough';

    if (props.outputLength <= 5) {
        message = 'Text too short';
    }
    
    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default Validation;