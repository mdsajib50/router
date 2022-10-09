import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

const Main = () => {
    return (
        <div>
            <h4>This is main page</h4>
           <Header></Header> 
           <Outlet></Outlet>
        </div>
    );
};

export default Main;