import React from 'react';

import { Link } from 'react-router-dom';

import './CartItemComp.css';

const CartItemComp = props => {
	return (
		<div className="cartitem">
			<div className="cartitem-image">
				<img src={props.item.imageUrl} alt="" />
			</div>
			<Link to={`/products/${props.item.productId}`} className="cartitem-name">
				<p>{props.item.name}</p>
			</Link>
			<p className="cartitem-price"> ₪{props.item.price * props.item.quantity} </p>
			<select
				className="cartitem-select"
				value={props.item.quantity}
				onChange={e => props.quantityChangeHandler(props.item.productId, e.target.value)}
			>
				{[ ...Array(props.item.countInStock).keys() ].map(x => (
					<option key={x + 1} value={x + 1}>
						{x + 1}
					</option>
				))}
			</select>

			<button className="cartitem-deletebtn" onClick={e => props.removeFromCartHandler(props.item.productId)}>
				<i className="fas fa-trash" />
			</button>
		</div>
	);
};

export default CartItemComp;
