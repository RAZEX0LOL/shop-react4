import { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
import products from '../data/products'

const Home = () => {
	const [query, setQuery] = useState('')
	const [sortOption, setSortOption] = useState('')
	const [category, setCategory] = useState('')
	const [minPrice, setMinPrice] = useState('')
	const [maxPrice, setMaxPrice] = useState('')
	const [filteredProducts, setFilteredProducts] = useState(products)

	useEffect(() => {
		let filtered = products

		if (query.trim() !== '') {
			filtered = filtered.filter(product =>
				product.title.toLowerCase().includes(query.toLowerCase()) ||
				product.description.toLowerCase().includes(query.toLowerCase())
			)
		}

		if (minPrice !== '') {
			filtered = filtered.filter(product => product.price >= parseFloat(minPrice))
		}
		if (maxPrice !== '') {
			filtered = filtered.filter(product => product.price <= parseFloat(maxPrice))
		}

		if (sortOption === 'price-asc') {
			filtered.sort((a, b) => a.price - b.price)
		} else if (sortOption === 'price-desc') {
			filtered.sort((a, b) => b.price - a.price)
		} else if (sortOption === 'name-asc') {
			filtered.sort((a, b) => a.title.localeCompare(b.title))
		} else if (sortOption === 'name-desc') {
			filtered.sort((a, b) => b.title.localeCompare(a.title))
		}

		setFilteredProducts(filtered)
	}, [query, sortOption, minPrice, maxPrice])

	return (
		<div className="container mx-auto p-4">
			<Banner />
			<div className="my-4">
				<input
					type="text"
					placeholder="Поиск товаров (название или описание)..."
					value={query}
					onChange={e => setQuery(e.target.value)}
					className="px-4 py-2 border rounded w-full md:w-1/2"
				/>
			</div>
			<h1 className="text-3xl font-bold mt-8 mb-6">Наши товары</h1>
			<ProductList products={filteredProducts} />
		</div>
	)
}

export default Home