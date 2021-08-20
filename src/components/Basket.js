import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

// You can use console.log for debugging purposes.

// This component is already implemented and working as expected.
// `Please focus on Redux related parts.
export function Basket({ products = [], onRemove, totalPrice = 0.0 }) {
	const currentBasket = useSelector((state) => state.basket);

	// For debugging purposes only. Left this uncommented so you can see the basket changing correctly when you add a product
	useEffect(() => {
		console.log(currentBasket);
	}, [currentBasket]);

	return (
		<div>
			<ul className="products">
				{products.map((product) => (
					<li key={product.id} id={`product-${product.id}`}>
						<span>Name: {product.name}</span>
						<span>Quantity: {product.quantity}</span>
						<button id={`remove-${product.id}`} onClick={() => onRemove(product.id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
			<div>
				Total price:{' '}
				<span id="total-price">
					{/* Added this line to see the totalPrice change */}
					{currentBasket.reduce((total, product) => (total += product.price * product.quantity), 0)}
				</span>
			</div>
		</div>
	);
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
