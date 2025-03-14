import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	const [darkMode, setDarkMode] = useState(false)

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
		setDarkMode((prev) => {
			const newMode = !prev
			if (newMode) {
				document.documentElement.classList.add('dark')
			} else {
				document.documentElement.classList.remove('dark')
			}
			localStorage.setItem('darkMode', newMode)
			return newMode
		})
	}

	return (
		<header className='bg-white shadow-md'>
			<div className='container mx-auto flex justify-between items-center p-4'>
				<Link to={"/"} className='text-2xl font-bold text-gray-600 hover:text-gray-800'>
					E-Commerce Shop
				</Link>
				<div className='flex items-center space-x-4'>
					<Link to="/favorites" className='text-gray-800 dark:text-white'>
						Избранное
					</Link>
					<Link to="/cart" className='text-gray-800 dark:text-white'>
						Корзина
					</Link>
					<Link to="/orders" className='text-gray-800 dark:text-white'>
						История заказов
					</Link>
					<button onClick={toggleDarkMode} className='px-3 py-1 border rounded focus:outline-none '>
						{darkMode ? 'Светлая тема' : 'Темная тема'}
					</button>
				</div>
			</div>
		</header>
	)
}
export default Header