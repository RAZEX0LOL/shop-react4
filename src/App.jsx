import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from "./components/Footer"
import Header from "./components/Header"
import { FavoritesProvider } from './context/FavoritesContext'
import CartPage from './pages/CartPage'
import CheckoutPage from "./pages/CheckoutPage"
import FavoritesPage from './pages/FavoritesPage'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import PurchareHistory from "./pages/PurchareHistory"
import ThankYouPage from './pages/ThankYouPage'

export default function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems')
    return savedCart ? JSON.parse(savedCart) : []
  })

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const handleUpdateQuantity = (id, newQuantity) => {
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    )
  }

  const handleRemoveItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setCartItems([])
  }


  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Header />
        <main className='min-h-screen'>
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} />} />
            <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} clearCart={clearCart} />} />
            <Route path="/orders" element={<PurchareHistory />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </FavoritesProvider>
  )
}