import React from 'react';
import { useLoaderData } from 'react-router-dom';
import  User  from "../User/User";

const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <h4 className ='font-semibold text-white'>Total user: {users.length}</h4>
            <div className='bg-lime-300 md: w-full grid grid-cols-4 gap-2'>
            
            {
                users.map(user => 
                    <User user={user}></User>
                ) 
            }
        </div>
        </div>
    );
};

export default Users;