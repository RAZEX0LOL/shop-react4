import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
	return (
		<div className='bg-white rounded shadow p-4'>
			<img src={product.image} alt={product.title} className='w-full h-48 object-cover rounded' />
			<h3 className='mt-2 font-bold text-lg'>{product.title}</h3>
			<p className='text-gray-700'>{product.price} ₽</p>
			<Link to={`/product/${product.id}`} className='mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
				Подробнее
			</Link>
		</div>
	)
}
export default ProductCard