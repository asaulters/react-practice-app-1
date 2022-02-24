import React, {useState} from 'react';
// import reactDom from 'react-dom';


import Card from './components/Card/Card'
import User from './components/User/User'
import './App.css';

let users = [
  {
    username: 'Jim',
    age: '73',
    id: '0.34534'
  },
  {
    username: 'Tom',
    age: '56',
    id: '0.34534234234'
  }
];


function App() {

  const [newUser, setNewUser] = useState(users)

  const addUserHandler = (userData)=> {
    setNewUser((userData)
      // users = [{userData}]
      // users = [...users]
      // return[user],
      // console.log(user)
      // users.push(userData)
    )
    // console.log(userData)
    users.push(userData);
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
