import React from 'react';

import './ProductScreenComp.css';

const ProductScreenComp = () => {
	return (
		<div className="productscreen">
			<div className="productscreen-left">
				<div className="left-image">
					<img src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="" />
				</div>
				<div className="left-info">
					<p className="left-name">Product</p>
					<p>₪300</p>
					<p>Descripstion: Consequat culpa sit veniam non laboris velit aute incididunt commodo nostrud velit irure laborum in.</p>
				</div>
			</div>
			<div className="productscreen-right">
				<div className="right-info">
					<p>
						Price: <span>$300</span>
					</p>
					<p>
						Status: <span> In Stock! </span>
					</p>
					<p>
						Quantity:
						<select>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</p>
					<p>
						<button className="productscreen-addbtn"> Add To Cart </button>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductScreenComp;
