import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutForm from '../components/CheckoutForm'

const CheckoutPage = ({ cartItems, clearCart }) => {
	const [orderData, setOrderData] = useState(null)
	const navigate = useNavigate()

	const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
	const discountCode = localStorage.getItem('discountCode') || ''
	const discountPercentage = discountCode.trim().toUpperCase() === 'SALE2025' ? 0.1 : 0
	const finalPrice = totalPrice - totalPrice * discountPercentage

	const handleCheckoutSubmit = async (formData) => {
		const order = {
			...formData,
			items: cartItems,
			total: finalPrice,
			date: new Date().toISOString(),
		}
		console.log('Отправляем заказ:', order)
		try {
			const response = await fetch('http://localhost:3001/orders', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(order),
			})
			console.log('Response от сервера:', response)
			if (!response || !response.ok) {
				throw new Error('Ошибка при оформлении заказа')
			}
			const savedOrder = await response.json()
			console.log('Полученный заказ:', savedOrder)
			setOrderData(savedOrder)
			clearCart()
			localStorage.removeItem('discountCode')
			navigate('/thank-you', { state: { orderId: savedOrder.id, total: savedOrder.total } })
		} catch (error) {
			console.error('Ошибка в CheckoutPage:', error)
			alert('Ошибка при оформлении заказа')
		}
	}

	return (
		<div className="container mx-auto p-4 bg-white dark:bg-gray-800 min-h-screen transition-colors duration-300">
			<CheckoutForm finalPrice={finalPrice} onSubmit={handleCheckoutSubmit} />
		</div>
	)
}

export default CheckoutPage