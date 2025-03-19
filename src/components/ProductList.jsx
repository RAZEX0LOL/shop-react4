import ProductCard from './ProductCard'

const ProductList = ({ products, addToCart }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
			{products.map(product => (
				<ProductCard key={product.id} product={product} addToCart={addToCart} />
			))}
		</div>
	)
}
export default ProductList