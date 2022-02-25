import React from 'react';

import UserItem from './UserItem';


const User = (props) => {

    // const userMap = () => props.users.map(user => {
    //     return `${props.username}`;
        
    // })
    // console.log(userMap);
    // const passedUsers = props.newUser;
    // console.log(passedUsers)
    // const a = () => {
    //     console.log(users.username)
    // }
    // a();




    return (
        <section>
        {/* {props.users.map(user => ) } */}
        <li className='user-LI'>    
            <h3 className='user-LI__username'>{props.username}</h3>
            <div className='user-LI__age'>{props.age}</div>
        </li>
        </section>
    );
}

export default User;