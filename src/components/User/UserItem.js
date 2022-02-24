import React from 'react';

const UserItem = (props) => {

    return (
        <li className='user-LI'>    
            <h3 className='user-LI__username'>{props.username}</h3>
            <div className='user-LI__age'>{props.age}</div>
        </li>
    )

}

export default UserItem