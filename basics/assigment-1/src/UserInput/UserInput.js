import React from 'react'

const UserInput = (props) => {

    return (
        <div>
            <label htmlFor="userInput">User Input: </label>
            <input id="userInput" value={props.username} onChange={props.changeNameHandler} type="text"/>
        </div>
    )
};

export default UserInput;