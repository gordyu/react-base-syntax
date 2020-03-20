import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>The username is {props.userName}</p>
            <p>The second username is {props.userName}</p>
        </div>
    );
};

export default userOutput;