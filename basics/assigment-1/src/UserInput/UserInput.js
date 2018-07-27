import React from 'react'
import './UserInput.css'

const UserInput = (props) => {

    return (
        <div className="UserInput">
            <label htmlFor="userInput" className="user-label">User Input: </label>
            <input id="userInput" value={props.username} onChange={props.changeNameHandler} type="text"/>
        </div>
    )
};

export default UserInput;