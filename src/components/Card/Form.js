import React, { useState } from 'react';

// import Button from './UI/Button'

const Form = (props) => {

    const [newUserName, setNewUserName] = useState("");
    const [newUserAge, setNewUserAge] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidAge, setIsValidAge] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    const newUserNameHandler = (e) => {
        if(e.target.value.trim().length > 0){
            setIsValidName(true)
            setNewUserName(e.target.value)
        }
    }

    const newUserAgeHandler = (e) => {
        if(e.target.value.trim().length > 0){
            setIsValidAge(true)
            setNewUserAge(e.target.value)
        }

    }

    const newUserHandler = (e) => {
        e.preventDefault();
        if(isValidAge === true && isValidName === true){
            setIsValid(true);
            const userData = {
                username: newUserName,
                age: newUserAge
            }
            props.onSaveUserData(userData)
    
            setNewUserName("");
            setNewUserAge("");
            setIsValidAge(false);
            setIsValidName(false);
            setIsValid(false)
        } else {
            console.log("Not valid!");
            
            
        }
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