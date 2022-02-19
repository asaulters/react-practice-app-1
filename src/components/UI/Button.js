import React from 'react';

const Button =(props) => {

    const buttonHandler= (e) => {
        e.preventDefault();
        console.log('Clicked!');
        
    }

    return(
        <button  >Add User</button>
    )
}

export default Button;