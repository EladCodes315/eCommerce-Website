import React, { useState, useEffect } from 'react';

import './ProductScreenComp.css';

import { useDispatch, useSelector } from 'react-redux';

import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/accountActions';

const ProductScreenComp = ({ match, history }) => {
	const [ quantity, setQuantity ] = useState(1);
	const dispatch = useDispatch();

	const productDetails = useSelector(state => state.getProductDetails);
	const { loading, error, product } = productDetails;

	const loggedUser = useSelector(state => state.getLoggedUser.loggedUser);

	useEffect(
		() => {
			dispatch(getProductDetails(match.params.id));
		},
		[ dispatch, match.params.id ]
	);

	const addToCartHandler = () => {
		if (loggedUser.username !== undefined) {
			dispatch(addToCart(product._id, quantity, loggedUser));
			history.push('/cart');
		}
		else {
			history.push('/login');
		}
	};

	return (
		<div className="productscreen">
			{loading ? (
				<h2>Loading...</h2>
			) : error ? (
				console.log(error)
			) : (
				<div className="productscreen">
					<div className="productscreen-left">
						<div className="left-image">
							<img src={product.imageUrl} alt={product.name} />
						</div>
						<div className="left-info">
							<p className="left-name">{product.name}</p>
							<p>₪{product.price}</p>
							<p>Descripstion: {product.description}</p>
						</div>
					</div>
					<div className="productscreen-right">
						<div className="right-info">
							<p>
								Price: <span>₪{product.price * quantity}</span>
							</p>
							<p>
								Status: <span> {product.countInStock > 0 ? 'In Stock!' : 'Out of Stock!'} </span>
							</p>
							<p>
								Quantity:
								<select value={quantity} onChange={e => setQuantity(e.target.value)}>
									{[ ...Array(product.countInStock).keys() ].map(x => (
										<option key={x + 1} value={x + 1}>
											{x + 1}
										</option>
									))}
								</select>
							</p>
							<p>
								<button className="productscreen-addbtn" onClick={addToCartHandler}>
									{' '}
									Add To Cart{' '}
								</button>
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductScreenComp;
