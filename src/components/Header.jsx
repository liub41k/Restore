import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({ numItems, total }) => {
	return (
		<header className="shop-header row">
			<Link className="logo text-dark" to="/">ReStore</Link>
			<Link to="/card" className="shopping-cart">
				<i className="cart-icon fa fa-shopping-cart" />
				{numItems} items (${total})
			</Link>
		</header>
	);
};

export default Header;