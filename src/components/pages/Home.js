import React from 'react';
import { ToastContainer } from 'react-toastify';
import AllProducts from './AllProducts';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './Banner';
import Footer from '../shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner />
            <AllProducts />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default Home;