import React, {useState} from 'react';
// import reactDom from 'react-dom';


import Card from './components/Card/Card'
import User from './components/User/User'
import './App.css';
import Modal from './components/Modal/Modal';
import useModal from './components/Modal/useModal'

let users = [];


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [newUser, setNewUser] = useState([users]);
  const {isShowing, toggle} = useModal();
  

  const addUserHandler = (userData)=> {
    
    setNewUser((prevUsers) => {
      return[ userData, ...prevUsers]
    });
    console.log(newUser);

  }


  const openModal = () => {
    setIsOpen(true)
}

const closeModal = () =>{
    setIsOpen(false)
}

  return (
    <div>
      <section className='user-form'>
        <Card  
          onAddUser = {addUserHandler} 
            
          />
          

      </section>
      <section className='user-list'>
        <User 
          userList= {newUser}
          
        />
      </section>
      
    </div>

  );
}

export default App;
