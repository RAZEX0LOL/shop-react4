// src/pages/ThankYouPage.jsx
import { Link, useLocation } from 'react-router-dom'

const ThankYouPage = () => {
	// Получаем переданные данные через состояние маршрута
	const location = useLocation()
	const { orderId, total } = location.state || {}

	return (
		<div className="container mx-auto p-4 bg-white dark:bg-gray-800 min-h-screen transition-colors duration-300 flex items-center justify-center">
			<div className="max-w-2xl w-full p-6 bg-white dark:bg-gray-900 shadow rounded text-center transition-colors duration-300">
				<h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
					Спасибо за заказ!
				</h2>
				{orderId ? (
					<>
						<p className="text-gray-800 dark:text-gray-300">
							Ваш заказ успешно оформлен.
						</p>
						<p className="mt-4 text-gray-800 dark:text-gray-300">
							Номер заказа: <strong>{orderId}</strong>
						</p>
						<p className="mt-2 text-gray-800 dark:text-gray-300">
							Общая стоимость: <strong>{Number(total).toFixed(2)} ₽</strong>
						</p>
					</>
				) : (
					<p className="text-gray-800 dark:text-gray-300">
						Информация о заказе не найдена.
					</p>
				)}
				<div className="mt-6">
					<Link
						to="/"
						className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors duration-300"
					>
						Вернуться на главную
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ThankYouPage