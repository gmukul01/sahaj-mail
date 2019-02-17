import React from 'react';

const Searchbar = () => {
	return (
		<div className="header-searchbar">
			<button>
				<i className="fas fa-bars" />
			</button>
			<input type="text" value={''} placeholder="Search for something..." onChange={() => {}} />
		</div>
	);
};

export default Searchbar;
