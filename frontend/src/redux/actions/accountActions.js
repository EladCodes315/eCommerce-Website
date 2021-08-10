import * as actionTypes from '../constants/accountConstants';
import axios from 'axios';

export const addAccount = account => async dispatch => {
	try {
		dispatch({ type: actionTypes.POST_ACCOUNT_REQUEST });
		let { data } = await axios.post('http://localhost:4000/accounts/', account);
		dispatch({
			type: actionTypes.POST_ACCOUNT_SUCCESS,
			payload: data
		});
	} catch (error) {
		dispatch({
			type: actionTypes.POST_ACCOUNT_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const addToCart = (productId, quantity, account) => async (dispatch, getState) => {
	try {
		dispatch({ type: actionTypes.ADD_TO_CART_REQUEST });
		const { data } = await axios.get(`http://localhost:4000/products/${productId}`);
		const existInCart = account.cart.find(x => x.productId === data._id);

		let newCart = [];
		if (existInCart) {
			newCart = account.cart.map(
				x =>
					x.productId === existInCart.productId
						? {
								productId: data._id,
								name: data.name,
								imageUrl: data.imageUrl,
								price: data.price,
								countInStock: data.countInStock,
								quantity: parseInt(quantity)
							}
						: x
			);
		}
		else {
			newCart = [
				...account.cart,
				{
					productId: data._id,
					name: data.name,
					imageUrl: data.imageUrl,
					price: data.price,
					countInStock: data.countInStock,
					quantity: parseInt(quantity)
				}
			];
		}

		await axios.put(`http://localhost:4000/accounts/${account._id}`, newCart);
		dispatch({
			type: actionTypes.ADD_TO_CART_SUCCESS,
			payload: newCart
		});

		localStorage.setItem('loggedUser', JSON.stringify(getState().getLoggedUser.loggedUser));
	} catch (error) {
		dispatch({
			type: actionTypes.ADD_TO_CART_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const removeFromCart = (productId, account) => async (dispatch, getState) => {
	try {
		dispatch({ type: actionTypes.REMOVE_FROM_CART_REQUEST });

		let newCart = [ ...account.cart.filter(product => product.productId !== productId) ];

		await axios.put(`http://localhost:4000/accounts/${account._id}`, newCart);
		dispatch({
			type: actionTypes.REMOVE_FROM_CART_SUCCESS,
			payload: newCart
		});

		localStorage.setItem('loggedUser', JSON.stringify(getState().getLoggedUser.loggedUser));
	} catch (error) {
		dispatch({
			type: actionTypes.REMOVE_FROM_CART_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};

export const resetCart = account => async (dispatch, getState) => {
	try {
		dispatch({ type: actionTypes.RESET_CART_REQUEST });

		await axios.put(`http://localhost:4000/accounts/${account._id}`, []);
		dispatch({ type: actionTypes.RESET_CART_SUCCESS });

		localStorage.setItem('loggedUser', JSON.stringify(getState().getLoggedUser.loggedUser));
	} catch (error) {
		dispatch({
			type: actionTypes.RESET_CART_FAIL,
			payload: error.response && error.response.data.message ? error.response.data.message : error.message
		});
	}
};
