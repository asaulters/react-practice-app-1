import React from 'react';

import UserItem from './UserItem';


const User = (props) => {

    const passedUsers = props.userList;
    console.log(passedUsers)
    // const users = passedUsers.map((user) => {
    //     return (
            
    //     )
    // })
    if(props.userList.length === 0) {
        return <h2>Found no users!</h2>
    } else {
        return (
            <ul>
                {props.userList.map((user)=> (
                    <UserItem 
                        key={user.id}
                        username={user.username}
                        age={user.age}
                    />
                ))}
            </ul>
        );
    }

}

export default User;