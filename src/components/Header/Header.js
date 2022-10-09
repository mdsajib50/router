import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='w-screen p-4 m-2 bg-amber-400 text-end text-2xl md:pr-24' >
           <Link className='px-4' to='/home'>Home</Link>
           <Link className='px-4' to='/about'>About</Link>
           <Link className='px-4' to='/shop'>Shop</Link>
           <Link className='px-4' to ='/user'>User</Link>
        </div>
    );
};

export default Header;