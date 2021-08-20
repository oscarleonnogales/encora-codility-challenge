import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToBasket } from '../redux/actions';

export default function AddProductComponent() {
	const dispatch = useDispatch();

	return <button onClick={() => dispatch(addProductToBasket(getSampleProduct()))}>Add product to basket</button>;
}

// Returns a random product
function getSampleProduct() {
	return {
		id: Math.floor(Math.random() * 10000000),
		name: 'product 1',
		quantity: 1,
		price: 1.0,
	};
}
