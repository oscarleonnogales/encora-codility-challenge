export function addProductToBasket(product) {
	return {
		type: 'ADD_PRODUCT_TO_BASKET',
		payload: product,
	};
}

export function removeProductFromBasket(productId) {
	return {
		type: 'REMOVE_PRODUCT_FROM_BASKET',
		payload: productId,
	};
}
