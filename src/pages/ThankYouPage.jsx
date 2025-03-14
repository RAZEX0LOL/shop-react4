import { Link, useLocation } from 'react-router-dom'

const ThankYouPage = () => {
	const location = useLocation()
	const { orderId, total } = location.state || {}

	return (
		<div className='container mx-auto p-4'>
			<div className='max-w-2xl mx-auto p-6 bg-white shadow rounded text-center'>
				<h2 className='text-2xl font-bold mb-4'>
					Спасибо за заказ!
				</h2>
				{orderId ? (
					<>
						<p>
							Ваш заказ успешно оформлен. Мы свяжемся с вами для потдверждения доставки!
						</p>
						<p className='mt-4'>
							Номер заказа <strong>№{orderId}</strong>
						</p>
						<p className='mt-4'>
							Общая стоимость: <strong>{Number(total).toFixed(2)} ₽</strong>
						</p>
					</>
				) : (
					<p>
						Информация о заказе не найдена!
					</p>
				)}
				<div className='mt-6'>
					<Link to={"/"} className='inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors'>
						Вернутся на главную
					</Link>
				</div>
			</div>
		</div>
	)
}
export default ThankYouPage