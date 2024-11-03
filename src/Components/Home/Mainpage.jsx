import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainPAge = () => {
    return (
        <div>
           <div className='h-16'>
           <Nav ></Nav>
           </div>
            <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default MainPAge;