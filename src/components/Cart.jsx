import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = ({ cartItems, onUpdateQuantity, onRemoveItem, onSaveCart }) => {
	const [discountCode, setDiscountCode] = useState('')
	const [appliedDiscount, setAppliedDiscount] = useState(0)

	const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
	const discountedPrice = totalPrice - totalPrice * appliedDiscount

	const handleApplyDiscount = () => {
		if (discountCode.trim().toUpperCase() === 'SALE2025') {
			setAppliedDiscount(0.1)
		} else {
			setAppliedDiscount(0)
			alert('Неверный промокод!')
		}
	}

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems))
		if (onSaveCart) {
			onSaveCart(cartItems)
		}
	}, [cartItems, onSaveCart])

	return (
		<div className='bg-white p-6 rounded-lg shadow-lg transition-all duration-300'>
			<h2 className='text-2xl font-bold mb-4 text-center'>Ваша корзина!</h2>
			{cartItems.length === 0 ? (
				<p className="text-center text-gray-500">Корзина пуста</p>
			) : (
				<>
					<div className='space-y-4'>
						{cartItems.map(item => (
							<div key={item.id} className='flex flex-col md:flex-row items-center justify-between border-b pb-4'>
								<div className='flex items-center w-full md:w-1/2'>
									<img src={item.image} alt={item.title} className='w-20 h-20 object-cover rounded mr-4' />
									<div>
										<h3 className='text-lg font-semibold'>
											{item.title}
										</h3>
										<p className='text-sm text-gray-600'>
											{item.price}
										</p>
									</div>
								</div>
								<div className='flex items-center my-2 md:my-0'>
									<button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className='px-3 py-1 border rounded-l disabled:opacity-50 transition-colors' disabled={item.quantity <= 1}>
										-
									</button>
									<span className='px-4 border-t border-b'>{item.quantity}</span>
									<button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className='px-3 py-1 border rounded-l disabled:opacity-50 transition-colors'>
										+
									</button>
								</div>
								<div className='text-right'>
									<button onClick={() => {
										if (window.confirm('Вы уверены, что хотите удалить этот товар?')) {
											onRemoveItem(item.id)
										}
									}} className='text-red-500 hover:underline'>
										Удалить
									</button>
								</div>
							</div>
						))}
					</div>
					<div className='mt-6 text-right'>
						<p className='text-xl font-semibold text-green-600'>
							Общая стоимость: {totalPrice.toFixed(2)} ₽
						</p>
						{appliedDiscount > 0 && (
							<p className='text-xl font-semibold text-green-600'>
								Со скидкой: {discountedPrice.toFixed(2)} ₽
							</p>
						)}
					</div>
					<div className='mt-6'>
						<label htmlFor="promo" className='block text-gray-700 mb-2'>
							Промокод
						</label>
						<div className='flex flex-col md:flex-row gap-2'>
							<input
								id='promo'
								type='text'
								placeholder='Введите промокод'
								value={discountCode}
								onChange={(e) => setDiscountCode(e.target.value)}
								className='flex-1 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
							/>
							<button onClick={handleApplyDiscount} className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'>
								Применить
							</button>
						</div>
					</div>
					<div className='mt-8 text-center'>
						<Link to={'/checkout '} className='inline-block bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition-colors'>
							Купить
						</Link>
					</div>
				</>
			)}
		</div>
	)
}
export default Cart