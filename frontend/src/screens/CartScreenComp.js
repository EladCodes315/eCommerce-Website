import React from 'react';
import CartItemComp from '../components/CartItemComp';

import './CartScreenComp.css';

import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart, resetCart } from '../redux/actions/accountActions';
import axios from 'axios';

const CartScreenComp = () => {
	const dispatch = useDispatch();

	const loggedUser = useSelector(state => state.getLoggedUser.loggedUser);

	const quantityChangeHandler = (productId, quantity) => {
		dispatch(addToCart(productId, quantity, loggedUser));
	};

	const removeFromCartHandler = productId => {
		dispatch(removeFromCart(productId, loggedUser));
	};

	const getCartCount = () => {
		return loggedUser.cart ? loggedUser.cart.reduce((cartCount, item) => item.quantity + cartCount, 0) : 0;
	};

	const getCartSubtotal = () => {
		return loggedUser.cart ? loggedUser.cart.reduce((subtotal, item) => item.quantity * item.price + subtotal, 0) : 0;
	};

	const checkoutHandler = async () => {
		try {
			let { data } = await axios.post('http://localhost:4000/checkout', loggedUser.cart);
			dispatch(resetCart(loggedUser));
			window.location = data.url;
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className="cartscreen">
			<div className="cartscreen-left">
				<h2> My Cart </h2>
				{!loggedUser.cart || loggedUser.cart.length === 0 ? (
					<div> Your Cart is Empty! </div>
				) : (
					loggedUser.cart.map((item, index) => (
						<CartItemComp
							key={index}
							item={item}
							quantityChangeHandler={quantityChangeHandler}
							removeFromCartHandler={removeFromCartHandler}
						/>
					))
				)}
			</div>
			<div className="cartscreen-right">
				<div className="cartscreen-info">
					<p> Subtotal ({getCartCount()}) items</p>
					<p> ${getCartSubtotal().toFixed(2)} </p>
					<div>
						<button onClick={checkoutHandler}>Checkout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartScreenComp;
