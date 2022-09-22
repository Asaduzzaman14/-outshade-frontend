import React from 'react';
import { ToastContainer } from 'react-toastify';
import AllProducts from './AllProducts';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <div>
            <h2>Outshade Digital Media</h2>
            <AllProducts />
            <ToastContainer />

        </div>
    );
};

export default Home;