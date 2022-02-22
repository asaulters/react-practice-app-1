import React, {useState} from "react";
// import reactDom from "react-dom";

import Form from './Form';
// import Button from "./UI/Button";

const users = [{}];

const Card = (props) => {
    // const [newUser, setNewUser] = useState(props.users)

    // const addUserHandler = (user)=> {
    //     setNewUser((prevUsers)=> {
    //       return[user, ... prevUsers]
    //     })
    //   }
    //   onAddUser(addUserHandler);

    const userDataHandler = (enteredUserData) => {
        const newUserData = {
            ...enteredUserData,
            id: Math.random().toString()
        }
        props.onAddUser(newUserData);
        
    }

    return(
        <div>
            <Form  onSaveUserData={userDataHandler} />
            
        </div>
    )

}

 

export default Card;