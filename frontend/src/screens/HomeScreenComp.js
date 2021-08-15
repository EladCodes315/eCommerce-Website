import React, { useEffect, useState } from 'react';
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

	const [ category, setCategory ] = useState('');

	return (
		<div className="homescreen">
			<p style={{ marginLeft: '25px' }}>
				{' '}
				Filter by category:{' '}
				<select value={category} onChange={e => setCategory(e.target.value)}>
					<option value="" />
					<option value="men's clothing"> Men's Clothing</option>
					<option value="women's clothing"> Women's Clothing</option>
					<option value="jewelery"> Jewelry</option>
					<option value="electronics"> Electronics</option>
				</select>
			</p>
			<div className="homescreen-products">
				{loading ? (
					<h2>Loading...</h2>
				) : error ? (
					<h2>{console.log(error)}</h2>
				) : category === '' ? (
					products.map((product, index) => <ProductComp key={index} product={product} />)
				) : (
					products.filter(product => product.category === category).map((product, index) => <ProductComp key={index} product={product} />)
				)}
			</div>
		</div>
	);
};

export default HomeScreenComp;
