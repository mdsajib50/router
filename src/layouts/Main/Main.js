import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

const Main = () => {
    return (
        <div className='bg-lime-300 md: w-full'>
           <Header></Header> 
           <Outlet></Outlet>
        </div>
    );
};

export default Main;