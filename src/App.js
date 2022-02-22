import React, {useState} from 'react';
// import reactDom from 'react-dom';


import Card from './components/Card/Card'
import User from './components/User/User'
import './App.css';

const users = [{}];

function App() {

  const [newUser, setNewUser] = useState(users)

  const addUserHandler = (user)=> {
    setNewUser((prevUsers)=> {
      return[user, ... prevUsers],
      console.log(user)
    })
    console.log(users);

  }



  return (
    <div>
      <Card  onAddUser= {addUserHandler} />
      <User />
    </div>

  );
}

export default App;
