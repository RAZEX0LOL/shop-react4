import Cart from "../components/Cart"

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
	return (
		<div className='container mx-auto p-4'>
			<Cart cartItems={cartItems} onRemoveItem={onRemoveItem} onUpdateQuantity={onUpdateQuantity} />
		</div>
	)
}
export default CartPage