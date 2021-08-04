// React Hooks
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// CSS
import './SideDrawerComp.css';

const SideDrawerComp = props => {
	const sideDrawerClass = [ 'sidedrawer' ];
	if (props.show) {
		sideDrawerClass.push('show');
	}

	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((cartCount, item) => Number(item.quantity) + cartCount, 0);
	};

	return (
		<div className={sideDrawerClass.join(' ')}>
			<ul className="sidedrawer-links" onClick={props.click}>
				<li>
					<Link to="/">Shop</Link>
				</li>
				<li>
					<Link to="/cart">
						{/* Cart Icon */}
						<div className="sidedrawer-cartlogo">
							<i className="fas fa-shopping-cart" />
						</div>
						{/* Cart counter */}
						<span className="sidedrawer-cart-counter">{getCartCount()}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawerComp;
