import React, {useState} from 'react';
// import reactDom from 'react-dom';


import Card from './components/Card/Card'
import User from './components/User/User'
import './App.css';

let users = [
  {
    username: 'Jim',
    age: '73'
  },
  {
    username: 'Tom',
    age: '56'
  }
];


function App() {

  const [newUser, setNewUser] = useState(users)

  const addUserHandler = (user)=> {
    setNewUser((user)=> {
      users = [user, ...users]
      // return[user],
      // console.log(user)
      // users.push(user)
    })
    console.log(user)
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
