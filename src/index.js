import React from 'react';
import ReactDOM from 'react-dom';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

import Basket from './components/Basket';
import basketReducer from './redux/reducer';

import AddProductComponent from './components/AddProductComponent';
import RemoveProductComponent from './components/RemoveProductComponent';

const rootReducer = combineReducers({
	basket: basketReducer,
});
const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<Basket />
		<div id="utils">
			<AddProductComponent />
			<RemoveProductComponent />
		</div>
	</Provider>,
	document.getElementById('root')
);
