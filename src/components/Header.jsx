import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='bg-white shadow-md'>
			<div className='container mx-auto flex justify-between items-center p-4'>
				<Link to={"/"} className='text-2xl font-bold text-gray-600 hover:text-gray-800'>
					E-Commerce Shop
				</Link>
				<nav>
					<Link to={"/cart"} className='text-gray-600 hover:text-gray-800'>
						Корзина
					</Link>
				</nav>
			</div>
		</header>
	)
}
export default Header