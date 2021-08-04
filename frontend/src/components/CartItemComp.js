import React from 'react';

import { Link } from 'react-router-dom';

import './CartItemComp.css';

const CartItemComp = () => {
	return (
		<div className="cartitem">
			<div className="cartitem-image">
				<img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
			</div>
			<Link to={`/products/${111}`} className="cartitem-name">
				<p>Product</p>
			</Link>
			<p className="cartitem-price"> ₪300 </p>
			<select className="cartitem-select">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>

			<button className="cartitem-deletebtn">
				<i className="fas fa-trash" />
			</button>
		</div>
	);
};

export default CartItemComp;
