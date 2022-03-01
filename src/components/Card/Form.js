import React, { useState } from 'react';

// import Button from './UI/Button'
import Modal from '../Modal/Modal';
import useModal from '../Modal/useModal';

const Form = (props) => {

    const [newUserName, setNewUserName] = useState("");
    const [newUserAge, setNewUserAge] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidAge, setIsValidAge] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState();

    const {isShowing, toggle} = useModal();


    const newUserNameHandler = (e) => {
        if(e.target.value.trim().length > 0){
            setIsValidName(true)
            setNewUserName(e.target.value)
        }
    }

    const newUserAgeHandler = (e) => {
        if(e.target.value.trim().length > 0 && e.target.value >0){
            setIsValidAge(true)
            setNewUserAge(e.target.value)
        }

    }

    const modalHandler = () =>{
        
    }
    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () =>{
        setIsOpen(false);
        setError(null);
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

            return(
                <div>
                {setError(true)}
                { console.log("Not valid!")}
                </div>
            )
            console.log("Not valid!");

            // <useModal />
            
        }
    }



    return(
        <div>
            {error && <Modal title="An Error Occured!" message="Something went wrong" onConfirm={closeModal}/>}
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

                    max='150'
                    onChange={newUserAgeHandler} /> 
                <button >Add User</button>  
            </form>
        </div>
    )
}

export default Form;