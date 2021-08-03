import React from 'react';

import './ProductComp.css';

import { Link } from 'react-router-dom';

const ProductComp = () => {
	return (
		<div className="product">
			<img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />

			<div className="product-info">
				<p className="product-name">Product Name</p>

				<p className="product-description">Excepteur anim officia minim sit.</p>

				<p className="product-price">₪300</p>

				<Link to={`/product/${1111}`} className="product-button">
					View
				</Link>
			</div>
		</div>
	);
};

export default ProductComp;
