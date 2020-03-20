import React from 'react';

const userInput = (props) => {
    
    const inlineStyle =  {
        border: '10px solid blue'
    };

    return <input type="text" 
            style={inlineStyle}
            onChange={props.changedUserName} 
            value={props.currentName} />
};

export default userInput;