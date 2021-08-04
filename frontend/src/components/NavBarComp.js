import React from 'react';
// CSS
import './NavBarComp.css';
// Dependencies
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBarComp = ({ click }) => {
	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((cartCount, item) => Number(item.quantity) + cartCount, 0);
	};

	return (
		<nav className="navbar">
			{/* Website headline logo */}
			<div className="navbar-logo">
				<Link to="/" className="navbar-links" style={{ display: 'flex' }}>
					<h2> Shopit! eCommerce Website</h2>
				</Link>
			</div>

			{/* Cart link */}
			<Link to="/cart" className="navbar-links">
				<div className="cart-link">
					{/* Cart counter */}
					<span className="cart-counter">{getCartCount()}</span>
					{/* Cart Icon */}
					<div className="cartlogo">
						<i className="fas fa-shopping-cart" />
					</div>
				</div>
			</Link>

			{/* Hamburger Menu */}
			<div className="hamburger-menu" onClick={click}>
				<div />
				<div />
				<div />
			</div>
		</nav>
	);
};

export default NavBarComp;
