import React from 'react';

const Searchbar = ({ handleSidebarOpen }) => {
	return (
		<div className="header-searchbar">
			<button onClick={handleSidebarOpen}>
				<i className="fas fa-bars" />
			</button>
			<input type="text" value={''} placeholder="Search for something..." onChange={() => {}} />
		</div>
	);
};

export default Searchbar;
