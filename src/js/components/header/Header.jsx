import React from 'react';
import Searchbar from './SearchBar';
import Info from 'containers/header/Info';

const Header = ({ handleSidebarOpen }) => {
	return (
		<section className="header">
			<Searchbar handleSidebarOpen={handleSidebarOpen} />
			<Info />
		</section>
	);
};

export default Header;
