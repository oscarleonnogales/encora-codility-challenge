import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductFromBasket } from '../redux/actions';

export default function RemoveProductComponent() {
	const dispatch = useDispatch();

	// Removes a random product from the basket if the ID matches. Could easily pass in the ID to remove a specific product
	return <button onClick={() => dispatch(removeProductFromBasket(getRandomId()))}>Remove product from basket</button>;
}

const getRandomId = () => {
	return Math.floor(Math.random() * 10000000);
};
