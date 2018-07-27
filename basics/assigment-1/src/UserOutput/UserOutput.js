import React from 'react'

const UserOutput = (props) => {

    const styleOutputName = {
        fontFamily: 'fantasy',
        fontSize: '18px'
    };

    const styleOutput = {
        fontFamily: 'monospace',
        fontSize: '30px'
    };


    return (
        <div className="UserOutput">
            <p style={styleOutputName}>This is the first paragraph from {props.username} </p>
            <p style={styleOutput}>This is the second paragraph</p>
            <hr/>
        </div>
    )

};

export default UserOutput;