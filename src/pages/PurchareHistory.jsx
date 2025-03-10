import { useEffect, useState } from 'react'

const PurchareHistory = () => {
	const [orders, setOrders] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await fetch('http://localhost:3001/orders')
				if (!response.ok) {
					throw new Error('Ошибка при загрузке истории заказов')
				}
				const data = await response.json()
				setOrders(data)
			} catch (error) {
				console.error(error)
				alert('Ошибка при загрузке истории заказов')
			} finally {
				setLoading(false)
			}
		}
		fetchOrders()
	}, [])
}