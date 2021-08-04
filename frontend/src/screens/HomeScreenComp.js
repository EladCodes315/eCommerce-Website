import React, { useEffect } from 'react';
import ProductComp from '../components/ProductComp';

import './HomeScreenComp.css';

import { useDispatch, useSelector } from 'react-redux';

import { getProducts as listProducts } from '../redux/actions/productActions';

const HomeScreenComp = () => {
	const dispatch = useDispatch();
	const getProducts = useSelector(state => state.getProducts);
	const { loading, products, error } = getProducts;

	useEffect(
		() => {
			dispatch(listProducts());
		},
		[ dispatch ]
	);

	return (
		<div className="homescreen">
			<div className="homescreen-products">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>{console.log(error)}</h2>
				) : (
					products.map((product, index) => <ProductComp key={index} product={product} />)
				)}
			</div>
		</div>
	);
};

export default HomeScreenComp;
