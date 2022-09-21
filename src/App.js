import logo from './logo.svg';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/pages/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Login from './components/auth/Login';
import Signup from './components/shared/Signup';
import Profile from './components/pages/Profile';
import AddProduct from './components/pages/AddProduct';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/add_product" element={<AddProduct />}></Route>
        <Route path="/profile" element={<Profile />}></Route>



        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>

      </Routes>

    </div>
  );
}

export default App;
