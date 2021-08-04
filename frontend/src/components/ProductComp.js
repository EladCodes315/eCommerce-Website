import React from 'react';

import './ProductComp.css';

import { Link } from 'react-router-dom';

const ProductComp = props => {
	return (
		<div className="product">
			<img src={props.product.imageUrl} alt={props.product.name} />

			<div className="product-info">
				<p className="product-name">{props.product.name}</p>

				<p className="product-description">{props.product.description}</p>

				<p className="product-price">₪{props.product.price}</p>

				<Link to={`/product/${props.product._id}`} className="product-button">
					View
				</Link>
			</div>
		</div>
	);
};

export default ProductComp;
