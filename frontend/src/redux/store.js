import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { getProductsReducer } from './reducers/productReducers';
import { getProductDetailsReducer } from './reducers/productReducers';
import { getLoggedUserReducer } from './reducers/accountReducers';

const reducer = combineReducers({
	getProducts: getProductsReducer,
	getProductDetails: getProductDetailsReducer,
	getLoggedUser: getLoggedUserReducer
});

const middleware = [ thunk ];

const userFromLocalStorage = localStorage.getItem('loggedUser') ? JSON.parse(localStorage.getItem('loggedUser')) : {};

const initialState = {
	getLoggedUser: {
		loggedUser: userFromLocalStorage
	}
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
