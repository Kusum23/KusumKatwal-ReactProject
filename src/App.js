import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import "./index.css"
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import { Footer } from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Payment from './pages/Payment/Payment'

const App = () => {
  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup/>:<></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/payment' element={<Payment/>}/> {/* Route for Payment */}
        <Route path='/order' element={<PlaceOrder />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/payment' element={<Payment />} />

      </Routes>
    </div>
    <Footer/>
    </>

  )
}

export default App