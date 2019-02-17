import React from 'react';

const Logout = ({ onLogoutClick }) => {
	return (
		<button className="logout" onClick={onLogoutClick}>
			<i className={`fas fa-sign-out-alt`} />
			Logout
		</button>
	);
};

export default React.memo(Logout);
