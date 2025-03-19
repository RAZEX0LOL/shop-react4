import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products'

// eslint-disable-next-line react/prop-types
const ProductDetail = ({ addToCart }) => {
	const { id } = useParams()
	const [product, setProduct] = useState(null)

	useEffect(() => {
		const foundProduct = products.find(item => item.id === parseInt(id))
		setProduct(foundProduct)
	}, [id])

	if (!product)
		return (
			<div className="container mx-auto p-4 text-gray-800 dark:text-gray-200">
				Товар не найден
			</div>
		)

	return (
		<div className="container mx-auto p-4 bg-white dark:bg-gray-800 transition-colors duration-300 flex flex-col md:flex-row">
			<img
				src={product.image}
				alt={product.title}
				className="w-full md:w-1/2 rounded"
			/>
			<div className="mt-4 md:mt-0 md:ml-6">
				<h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
					{product.title}
				</h1>
				<p className="text-xl text-gray-700 dark:text-gray-300 mt-2">
					{product.price} ₽
				</p>
				<p className="mt-4 text-gray-700 dark:text-gray-300">
					{product.description}
				</p>
				<button
					onClick={() => addToCart(product)}
					className="mt-6 bg-green-500 dark:bg-green-600 text-white px-4 py-2 rounded hover:bg-green-600 dark:hover:bg-green-700 transition-colors duration-300"
				>
					Добавить в корзину
				</button>
			</div>
		</div>
	)
}
export default ProductDetail