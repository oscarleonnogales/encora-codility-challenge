const initialState = {
	products: [],
};

export default function basketReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_PRODUCT_TO_BASKET':
			const alreadyInBasket = state.filter((product) => product.id === action.payload.id);
			if (alreadyInBasket.length > 0) {
				// Already in the basket, let's just update the quantity
				const basketCopy = [...state];
				const productToModify = basketCopy.find((product) => product.id === action.payload.id);
				productToModify.quantity++;
				return [...basketCopy.filter((product) => product.id !== action.payload.id), productToModify];
			} else {
				// No product with this ID is found, add it to the basket
				return [...state, action.payload];
			}
		case 'REMOVE_PRODUCT_FROM_BASKET':
			// Removing the product entirely, regardless if the basket quantity is currently 1 or multiple
			return [...state.filter((product) => product.id !== action.payload)];
		default:
			return state.products;
	}
}
