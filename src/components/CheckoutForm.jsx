import { useState } from 'react'

const CheckoutForm = ({ finalPrice, onSubmit }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		adress: '',
		paymentMethod: 'card'
	})

	const handleChange = (e) => {
		setFormData(prev => ({
			...prev,
			[e.target.name]: e.target.value,
		}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		onSubmit(formData)
	}

	return (
		<div className='max-w-2xl mx-auto bg-white show rounded'>
			<h2 className='text-2xl font-bold mb-4'>
				Оформление заказа!
			</h2>
			<p className='mb-4'>
				Итоговая стоимость со скидкой: {finalPrice.toFixed(2)} ₽
			</p>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label htmlFor="name" className='block mb-1 font-semibold'>
						Имя
					</label>
					<input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className='w-full border px-4 py-2 rounded' />
				</div>

				<div>
					<label htmlFor="email" className='block mb-1 font-semibold'>
						E-mail
					</label>
					<input type="text" name="email" id="email" value={formData.email} onChange={handleChange} required className='w-full border px-4 py-2 rounded' />
				</div>

				<div>
					<label htmlFor="adress" className='block mb-1 font-semibold'>
						Адрес
					</label>
					<input type="text" name="adress" id="adress" value={formData.adress} onChange={handleChange} required className='w-full border px-4 py-2 rounded' />
				</div>

				<div>
					<label htmlFor="paymentMethod">
						Способы оплаты:
					</label>
					<select name="paymentMethod" id="paymentMethod" value={formData.paymentMethod} onChange={handleChange} className='w-full border px-4 py-2 rounded'>
						<option value="card">Карта</option>
						<option value="sbp">СБП</option>
						<option value="cash">Наличные при получении</option>
					</select>
				</div>
				<button type='submit' className='w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors'>
					Подтвердить заказ
				</button>
			</form>
		</div>
	)
}
export default CheckoutForm