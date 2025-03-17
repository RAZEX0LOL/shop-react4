import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../context/FavoritesContext'

const ProductCard = ({ product, addToCart }) => {
	const { favorites, toggleFavorite } = useContext(FavoritesContext)

	// Определяем, является ли товар избранным
	const isFavorite = favorites.some((fav) => fav.id === product.id)

	return (
		<div className="bg-white dark:bg-gray-900 rounded shadow p-4 relative transition-colors duration-300">
			{/* Кнопка избранного, расположенная в верхнем правом углу */}
			<button
				onClick={() => toggleFavorite(product)}
				className="absolute top-2 right-2 focus:outline-none"
			>
				{isFavorite ? (
					// Если товар избранный – рисуем заполненное сердце
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-red-500"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
					</svg>
				) : (
					// Если не избранный – рисуем контур сердца
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 text-gray-400"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
							d="M5.121 19.364l6.364-6.364 6.364 6.364" />
					</svg>
				)}
			</button>

			<img
				src={product.image}
				alt={product.title}
				className="w-full h-48 object-cover object-center rounded mb-4"
			/>
			<h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2">{product.title}</h3>
			<p className="text-gray-700 dark:text-gray-300 mb-4">{product.price} ₽</p>
			<div className="mt-4 flex gap-4">
				<Link to={`/product/${product.id}`} className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 content-center'>
					Подробнее
				</Link>
				<button onClick={() => addToCart(product)} className='bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600'>
					Добавить в корзину
				</button>
			</div>
		</div>
	)
}

export default ProductCard