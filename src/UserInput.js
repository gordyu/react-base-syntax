import React from 'react';

const userInput = (props) => {
    return <input type="text" onChange={props.changedUserName}></input>
};

export default userInput;