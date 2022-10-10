import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    console.log(user)
    const {id,name,phone,username}= user
    return (
        <div className = 'bg-teal-400 m-4 p-10 w-64'>
            <p>Name: <b>{name}</b></p>
            <p>User Name: <b>{username}</b></p>
            <p>Phone Number: <b>{phone}</b></p>
            <button className='bg-red-400 border-indigo-700 text-white p-3 mt-6 border-2 rounded font-bold'><Link to={`/user/${id}`}>View User</Link></button>
        </div>
    
    );
};

export default User;