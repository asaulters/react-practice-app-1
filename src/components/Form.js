import React, { useState } from 'react';

// import Button from './UI/Button'

const Form = () => {

    const [newUserName, setNewUserName] = useState('');
    const [newUserAge, setNewUserAge] = useState('');
    const [isEditing, setIsEditing] = useState('false')

    const newUserNameHandler = (e) => {
        setNewUserName(e.target.value)

    }

    const newUserAgeHandler = (e) => {
        setNewUserAge(e.target.value)

    }

    const newUserHandler = (e) => {
        e.preventDefault();
        console.log(newUserAge);
        console.log(newUserName)
        newUserNameHandler('');
        newUserAgeHandler('');
    }



    return(
        <form onSubmit={newUserHandler}>
            <label>Username</label>
                <input 
                type='text' 
                value={newUserName}
                onChange={newUserNameHandler} />
            <label>Age (Years)</label>
                <input
                type='text' 
                value={newUserAge}
                min='0'
                max='150'
                onChange={newUserAgeHandler} /> 
            <button >Add User</button>  
        </form>
    )
}

export default Form;