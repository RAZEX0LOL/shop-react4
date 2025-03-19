const Footer = () => {
	return (
		<footer className="bg-gray-100 dark:bg-gray-800 py-4 mt-10">
			<div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
				© {new Date().getFullYear()} E-Commerce Shop
			</div>
		</footer>
	)
}
export default Footer