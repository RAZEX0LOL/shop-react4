import { useState } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Footer from "./components/Footer"
import Header from "./components/Header"
import CartPage from './pages/CartPage'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product])
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  return (
    <Router>
      <Header />
      <main className='min-h-screen'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}