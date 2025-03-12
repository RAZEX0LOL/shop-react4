// src/pages/CheckoutPage.jsx
import { useState } from 'react'
import CheckoutForm from '../components/CheckoutForm'

const CheckoutPage = ({ cartItems, clearCart }) => {
	const [orderSubmitted, setOrderSubmitted] = useState(false)
	const [orderData, setOrderData] = useState(null)

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
			setOrderSubmitted(true)
			clearCart()
			localStorage.removeItem('discountCode')
		} catch (error) {
			console.error('Ошибка в CheckoutPage:', error)
			alert('Ошибка при оформлении заказа')
		}
	}

	if (orderSubmitted && orderData) {
		return (
			<div className="container mx-auto p-4">
				<div className="max-w-2xl mx-auto p-6 bg-white shadow rounded text-center">
					<h2 className="text-2xl font-bold mb-4">Спасибо за заказ!</h2>
					<p>Ваш заказ успешно оформлен. Мы свяжемся с вами для подтверждения доставки.</p>
					<p className="mt-4">Общая стоимость: {Number(orderData.total).toFixed(2)} ₽</p>
				</div>
			</div>
		)
	}

	return (
		<div className="container mx-auto p-4">
			<CheckoutForm cartItems={cartItems} finalPrice={finalPrice} onSubmit={handleCheckoutSubmit} />
		</div>
	)
}

export default CheckoutPage