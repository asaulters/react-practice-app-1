import React, {useState} from 'react';
// import reactDom from 'react-dom';


import Card from './components/Card/Card'
import User from './components/User/User'
import './App.css';

const users = [
  {
    username: 'Jim',
    age: '73'
  },
  {
    username: 'Tom',
    age: '56'
  }
];

const characters = [
  {
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      eye_color: 'blue',
      gender: 'male',
  },
  {
      name: 'Darth Vader',
      height: '202',
      mass: '136',
      eye_color: 'yellow',
      gender: 'male',
  },
  {
      name: 'Leia Organa',
      height: '150',
      mass: '49',
      eye_color: 'brown',
      gender: 'female',
  },
  {
      name: 'Anakin Skywalker',
      height: '188',
      mass: '84',
      eye_color: 'blue',
      gender: 'male',
  },
];

const totalHeight = characters.reduce((acc, cur) => acc + (cur.height)
, '0')
console.log(totalHeight)




function App() {

  const [newUser, setNewUser] = useState(users)

  const addUserHandler = (user)=> {
    setNewUser((prevUsers)=> {
      return[user, ... prevUsers],
      console.log(user)
      users.push(user)
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
