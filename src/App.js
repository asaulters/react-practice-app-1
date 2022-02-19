import React, {useState} from 'react';
// import reactDom from 'react-dom';


import Card from './components/Card'
import User from './components/User'
import './App.css';

function App() {

  const [newUser, setNewUser] = useState()

  const addUserHandler = (user)=> {
    setNewUser((prevUsers)=> {
      return[user, ... prevUsers]
    })
  }



  return (
    <div>
      <Card />
      <User />
    </div>

  );
}

export default App;
