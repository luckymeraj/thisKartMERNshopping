import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
// Screens
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';

// components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
function App() {
  const [sideToggle,setSideToggle]=useState(false);
  return (
    <Router>
        {/* Navbar */}
        <Navbar click={()=>setSideToggle(true)}/>
        {/* SideDrawer */}
        <SideDrawer show={sideToggle} click={()=>setSideToggle(false)}/>
        {/* Backdrop */}
        <Backdrop show={sideToggle} click={()=>setSideToggle(false)}/>
        <main className='app'>
          <Routes>
            {/* HomeScreen */}
            {/* ProductScreen */}
            {/* CartScreen */}
            <Route  path='/' element={<HomeScreen/>} />
          
            <Route  path='/product/:id' element={<ProductScreen/>} />
            <Route  path='/cart' element={<CartScreen/>} />
          </Routes>
        </main>


    </Router>
  );
}

export default App;
