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

  const [newUser, setNewUser] = useState([users])

  const addUserHandler = (userData)=> {
        // users.push(userData);
    // const a = [userData, ...users];
    // console.log(a)
    // setNewUser(a)
    // console.log(newUser)
    setNewUser((prevUsers) => {
      return[ userData, ...prevUsers]
    });
    setTimeout(() => {
      console.log(newUser)
    }, 10000)
    // console.log(newUser)
    // console.log(userData)
    // users.push(userData);
    // console.log(users);
    // console.log(newUser);

  }

  const displayUsers = () => {
    addUserHandler();
    return newUser.map((user) => {
      return(
        <li>
          {user}
        </li>
      )
    })
    console.log(newUser);
  }

  


  return (
    <div>
      <section className='user-form'>
        <Card  
          onAddUser= {displayUsers} />
      </section>
      <section className='user-list'>
        <User 
          userArr= {[users]}
        />
      </section>
      
    </div>

  );
}

export default App;
