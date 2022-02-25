import React, {useState} from "react";
// import reactDom from "react-dom";

import Form from './Form';
// import Button from "./UI/Button";



const Card = (props) => {

    const userDataHandler = (enteredUserData) => {
        const newUserData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        props.onAddUser(newUserData);
        
    }

    //     const passedUsers = { props.users };
    // console.log(passedUsers)

    return(
        <div>
            <Form  onSaveUserData={userDataHandler} />
            
        </div>
    )

}

 

export default Card;