// src/components/Header.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	const [darkMode, setDarkMode] = useState(false)

	// При монтировании загружаем сохранённое значение из localStorage
	useEffect(() => {
		const storedMode = localStorage.getItem('darkMode')
		if (storedMode === 'true') {
			setDarkMode(true)
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [])

	const toggleDarkMode = () => {
		const newMode = !darkMode
		setDarkMode(newMode)
		if (newMode) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		localStorage.setItem('darkMode', newMode.toString())
		console.log('Новый режим:', newMode, document.documentElement.classList)
	}

	return (
		<header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
			<div className="container mx-auto flex justify-between items-center p-4">
				<Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white">
					E-commerce shop
				</Link>
				<div className="flex items-center space-x-4">
					<Link to="/orders" className="text-gray-800 dark:text-white">
						История покупок
					</Link>
					<Link to="/favorites" className="text-gray-800 dark:text-white">
						Избранное
					</Link>
					<Link to="/cart" className="text-gray-800 dark:text-white">
						Корзина
					</Link>
					<button
						onClick={toggleDarkMode}
						className="px-3 py-1 border rounded focus:outline-none"
					>
						{darkMode ? 'Светлая тема' : 'Тёмная тема'}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header