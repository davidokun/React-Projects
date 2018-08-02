import React from 'react';

const Validation = (props) => {

    let message = '';

    if (props.outputLength <= 5) {
        message = 'Text too short';
    } else {
        message = 'Text long enough';
    }
    
    return (
        <div>
            {message}
        </div>
    );
};

export default Validation;