import React, { useEffect } from 'react';
import CartItemComp from '../components/CartItemComp';

import './CartScreenComp.css';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const CartScreenComp = () => {
	const dispatch = useDispatch();

	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const quantityChangeHandler = (id, quantity) => {
		dispatch(addToCart(id, quantity));
	};

	const removeFromCartHandler = id => {
		dispatch(removeFromCart(id));
	};

	const getCartCount = () => {
		return cartItems.reduce((cartCount, item) => Number(item.quantity) + cartCount, 0);
	};

	const getCartSubtotal = () => {
		return cartItems.reduce((subtotal, item) => item.quantity * item.price + subtotal, 0);
	};

	return (
		<div className="cartscreen">
			<div className="cartscreen-left">
				<h2> My Cart </h2>
				{cartItems.length === 0 ? (
					<div> Your Cart is Empty! </div>
				) : (
					cartItems.map((item, index) => (
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
					<p> ₪{getCartSubtotal().toFixed(2)} </p>
					<div>
						<button>Checkout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartScreenComp;
