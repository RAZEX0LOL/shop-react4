const Cart = ({ cartItems, onRemove }) => {
	return (
		<div className='p-4 bg-white shadow rounded'>
			<h2 className='text-xl font-bold mb-4'>Корзина</h2>
			{
				cartItems.length === 0 ? (
					<p>Ваша корзина пуста</p>
				) : (
					<ul>
						{
							cartItems.map(item => (
								<li key={item.id} className='flex justify-between items-center mb-2'>
									<span>{item.title}</span>
									<button onClick={() => onRemove(item.id)} className='text-red-500'>Удалить</button>
								</li>
							))
						}
					</ul>
				)
			}
		</div>
	)
}
export default Cart