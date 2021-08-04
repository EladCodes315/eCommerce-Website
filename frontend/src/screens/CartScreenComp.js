import React from 'react';
import CartItemComp from '../components/CartItemComp';

import './CartScreenComp.css';

const CartScreenComp = () => {
	return (
		<div className="cartscreen">
			<div className="cartscreen-left">
				<h2> My Cart </h2>
				<CartItemComp />
				<CartItemComp />
				<CartItemComp />
				<CartItemComp />
			</div>
			<div className="cartscreen-right">
				<div className="cartscreen-info">
					<p> Subtotal (0) items</p>
					<p> ₪600</p>
					<div>
						<button>Checkout</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartScreenComp;
