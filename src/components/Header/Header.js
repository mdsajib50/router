import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-full p-4  bg-amber-400' >
           <div className='mx-24 text-2xl text-right'>
           <Link className='px-4' to='/home'>Home</Link>
           <Link className='px-4' to='/about'>About</Link>
           <Link className='px-4' to='/shop'>Shop</Link>
           <Link className='px-4' to ='/users'>Users</Link>
           </div>
        </div>
    );
};

export default Header;