import React from 'react';
import './App.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>The username is {props.userName}</p>
            <p>The second username is {props.userName}</p>
        </div>
    );
};

export default userOutput;