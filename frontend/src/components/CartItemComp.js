import React from 'react';

import { Link } from 'react-router-dom';

import './CartItemComp.css';

const CartItemComp = ({ item, quantityChangeHandler, removeFromCartHandler }) => {
	return (
		<div className="cartitem">
			<div className="cartitem-image">
				<img src={item.imageUrl} alt="" />
			</div>
			<Link to={`/products/${item.productId}`} className="cartitem-name">
				<p>{item.name}</p>
			</Link>
			<p className="cartitem-price"> ₪{item.price * item.quantity} </p>
			<select className="cartitem-select" value={item.quantity} onChange={e => quantityChangeHandler(item.productId, e.target.value)}>
				{[ ...Array(item.countInStock).keys() ].map(x => (
					<option key={x + 1} value={x + 1}>
						{x + 1}
					</option>
				))}
			</select>

			<button className="cartitem-deletebtn" onClick={e => removeFromCartHandler(item.productId)}>
				<i className="fas fa-trash" />
			</button>
		</div>
	);
};

export default CartItemComp;
