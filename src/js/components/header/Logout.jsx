import React from 'react';
import PropTypes from 'prop-types';

const Logout = ({ onLogoutClick }) => {
	return (
		<button className="logout" onClick={onLogoutClick}>
			<i className={`fas fa-sign-out-alt`} />
			Logout
		</button>
	);
};
Logout.propTypes = {
	onLogoutClick: PropTypes.func
};

export default React.memo(Logout);
