import { Link } from 'react-router-dom'

const ProductCard = ({ product, addToCart }) => {
	return (
		<div className='bg-white rounded shadow p-4'>
			<img src={product.image} alt={product.title} className='w-full h-48 object-cover object-center rounded' />
			<h3 className='mt-2 font-bold text-lg'>{product.title}</h3>
			<p className='text-gray-700'>{product.price} ₽</p>
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