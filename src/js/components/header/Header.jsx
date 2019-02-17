import React from 'react';
import Searchbar from './SearchBar';
import Info from './Info';

const Header = () => {
	return (
		<section className="header">
			<Searchbar />
			<Info />
		</section>
	);
};

export default Header;
