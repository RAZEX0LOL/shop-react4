import Cart from "../components/Cart"

const CartPage = ({ cartItems, removeFromCart }) => {
	return (
		<div className='container mx-auto p-4'>
			<Cart cartItems={cartItems} onRemove={removeFromCart} />
		</div>
	)
}
export default CartPage