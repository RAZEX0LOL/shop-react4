import { useContext } from 'react'
import ProductList from '../components/ProductList'
import { FavoritesContext } from '../context/FavoritesContext'

const FavoritesPage = () => {
	const { favorites } = useContext(FavoritesContext)

	return (
		<div className="container mx-auto p-4 bg-white dark:bg-gray-800 transition-colors duration-300">
			<h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">Избранное</h1>
			{favorites.length === 0 ? (
				<p className="text-gray-700 dark:text-gray-300">У вас нет избранных товаров.</p>
			) : (
				<ProductList products={favorites} />
			)}
		</div>
	)
}

export default FavoritesPage