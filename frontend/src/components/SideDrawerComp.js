// React Hooks
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// CSS
import './SideDrawerComp.css';

const SideDrawerComp = props => {
	const sideDrawerClass = [ 'sidedrawer' ];
	if (props.show) {
		sideDrawerClass.push('show');
	}
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
						<span className="sidedrawer-cart-counter">0</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideDrawerComp;
