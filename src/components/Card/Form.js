import React, { useState } from 'react';

// import Button from './UI/Button'

const Form = (props) => {

    const [newUserName, setNewUserName] = useState("''");
    const [newUserAge, setNewUserAge] = useState("");
    // const [isEditing, setIsEditing] = useState('false')

    const newUserNameHandler = (e) => {
        setNewUserName(e.target.value)
        console.log(newUserName)

    }

    const newUserAgeHandler = (e) => {
        setNewUserAge(e.target.value)
        console.log(newUserAge)

    }

    const newUserHandler = (e) => {
        e.preventDefault();
        
        const userData = {
            username: newUserName,
            age: newUserAge
        }
        props.onSaveUserData(userData)

        setNewUserName("");
        setNewUserAge("");
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