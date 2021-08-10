// React Hooks
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// CSS
import './SideDrawerComp.css';

import * as actionTypes from '../redux/constants/accountConstants';

const SideDrawerComp = props => {
	const sideDrawerClass = [ 'sidedrawer' ];
	if (props.show) {
		sideDrawerClass.push('show');
	}

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
		<div className={sideDrawerClass.join(' ')}>
			<ul className="sidedrawer-links" onClick={props.click}>
				<li>
					<Link to="/profile">Your Profile</Link>
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
		</div>
	);
};

export default SideDrawerComp;
