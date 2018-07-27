import React from 'react'

const UserOutput = (props) => {

    return (
        <div>
            <p>This is the first paragraph from {props.username} </p>
            <p>This is the second paragraph</p>
            <hr/>
        </div>
    )

};

export default UserOutput;