import React from 'react';

import UserItem from './UserItem';


const User = (props) => {

    const userMap = () => props.users.map(user => {
        return props.users.username;
        
    })
    console.log(userMap);


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