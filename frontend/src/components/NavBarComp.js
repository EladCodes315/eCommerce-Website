import React from 'react';
// CSS
import './NavBarComp.css';
// Dependencies
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as actionTypes from '../redux/constants/accountConstants';

const NavBarComp = ({ click }) => {
	const loggedUser = useSelector(state => state.getLoggedUser.loggedUser);

	const dispatch = useDispatch();

	const getCartCount = () => {
		if (loggedUser.cart) {
			return loggedUser.cart.reduce((cartCount, item) => Number(item.quantity) + cartCount, 0);
		}
		else return 0;
	};

	const logoutFunc = () => {
		dispatch({ type: actionTypes.LOGOUT_ACCOUNT });
	};

	return (
		<nav className="navbar">
			{/* Website headline logo */}
			<div className="navbar-logo">
				<Link to="/" className="navbar-links" style={{ display: 'flex' }}>
					<h2> Shopit! eCommerce Website</h2>
				</Link>
			</div>

			<ul className="navbar-links">
				<li>
					{' '}
					<Link to="/profile">
						<i className="fas fa-user-circle" style={{ color: '#f4f4f4', fontSize: '30px', marginTop: '10px', cursor: 'pointer' }} />
					</Link>
				</li>
				<li>
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
				</li>
				<li>
					{loggedUser.cart ? (
						<Link to="/login" onClick={logoutFunc}>
							Logout
						</Link>
					) : (
						<Link to="/login">Login</Link>
					)}
				</li>
			</ul>

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
