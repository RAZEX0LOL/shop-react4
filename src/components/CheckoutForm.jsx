// src/components/CheckoutForm.jsx
import React, { useState } from 'react'

const CheckoutForm = ({ finalPrice, onSubmit }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		address: '',
		paymentMethod: 'card',
	})

	// Обработчик изменения значений формы
	const handleChange = (e) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	// Обработка отправки формы
	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(formData)
	}

	return (
		<div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded transition-colors duration-300">
			<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Оформление заказа</h2>
			<p className="mb-4 text-gray-800 dark:text-gray-300">
				Итоговая стоимость со скидкой: <strong>{finalPrice.toFixed(2)} ₽</strong>
			</p>
			<form onSubmit={handleSubmit} className="space-y-4">
				{/* Поле для ввода имени */}
				<div>
					<label htmlFor="name" className="block mb-1 font-semibold text-gray-800 dark:text-gray-300">
						Имя
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
						className="w-full border px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
					/>
				</div>
				{/* Поле для ввода Email */}
				<div>
					<label htmlFor="email" className="block mb-1 font-semibold text-gray-800 dark:text-gray-300">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
						className="w-full border px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
					/>
				</div>
				{/* Поле для ввода адреса */}
				<div>
					<label htmlFor="address" className="block mb-1 font-semibold text-gray-800 dark:text-gray-300">
						Адрес доставки
					</label>
					<input
						type="text"
						id="address"
						name="address"
						value={formData.address}
						onChange={handleChange}
						required
						className="w-full border px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
					/>
				</div>
				{/* Селектор способа оплаты */}
				<div>
					<label htmlFor="paymentMethod" className="block mb-1 font-semibold text-gray-800 dark:text-gray-300">
						Способ оплаты
					</label>
					<select
						id="paymentMethod"
						name="paymentMethod"
						value={formData.paymentMethod}
						onChange={handleChange}
						className="w-full border px-4 py-2 rounded bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
					>
						<option value="card">Карта</option>
						<option value="paypal">PayPal</option>
						<option value="cash">Наличные при доставке</option>
					</select>
				</div>
				{/* Кнопка отправки формы */}
				<button
					type="submit"
					className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-colors"
				>
					Подтвердить заказ
				</button>
			</form>
		</div>
	)
}

export default CheckoutForm