import Cart from "../components/Cart"

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
	return (
		<div className="container mx-auto p-4 bg-gray-50 dark:bg-gray-800 min-h-screen transition-colors duration-300">
			<Cart
				cartItems={cartItems}
				onRemoveItem={onRemoveItem}
				onUpdateQuantity={onUpdateQuantity}
			/>
		</div>
	)
}
export default CartPage