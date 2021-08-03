import React from 'react';
import ProductComp from '../components/ProductComp';

import './HomeScreenComp.css';

const HomeScreenComp = () => {
	return (
		<div className="homescreen">
			<h1>Home Screen</h1>
			<div className="homescreen-products">
				<ProductComp />
				<ProductComp />
				<ProductComp />
				<ProductComp />
				<ProductComp />
				<ProductComp />
				<ProductComp />
			</div>
		</div>
	);
};

export default HomeScreenComp;
