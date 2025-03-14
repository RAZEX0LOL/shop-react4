import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CheckoutForm from '../components/CheckoutForm'

const CheckoutPage = ({ cartItems, clearCart }) => {
	const [orderData, setOrderData] = useState(null)
	const navigate = useNavigate()

	// Вычисляем общую стоимость корзины
	const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
	// Читаем промокод из localStorage и вычисляем скидку
	const discountCode = localStorage.getItem('discountCode') || ''
	const discountPercentage = discountCode.trim().toUpperCase() === 'SALE2025' ? 0.1 : 0
	const finalPrice = totalPrice - totalPrice * discountPercentage

	// Асинхронная функция отправки заказа
	const handleCheckoutSubmit = async (formData) => {
		// Формируем объект заказа
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

			// Если response не является корректным объектом Response или имеет ошибочный статус
			if (!response || !response.ok) {
				throw new Error('Ошибка при оформлении заказа')
			}

			const savedOrder = await response.json()
			console.log('Полученный заказ:', savedOrder)

			// Если по каким-то причинам savedOrder.total отсутствует, используем finalPrice
			const totalFromResponse = savedOrder.total !== undefined ? savedOrder.total : finalPrice

			setOrderData({ ...savedOrder, total: totalFromResponse })
			clearCart()
			localStorage.removeItem('discountCode')
			navigate('/thank-you', { state: { orderId: savedOrder.id, total: savedOrder.total } })
		} catch (error) {
			console.error('Ошибка в CheckoutPage:', error)
			alert('Ошибка при оформлении заказа')
		}
	}

	return (
		<div className="container mx-auto p-4">
			<CheckoutForm cartItems={cartItems} finalPrice={finalPrice} onSubmit={handleCheckoutSubmit} />
		</div>
	)
}

export default CheckoutPage