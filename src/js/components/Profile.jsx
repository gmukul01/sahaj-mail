import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'components/Avatar';

const Profile = ({ userName }) => (
	<div className="profile">
		<Avatar />
		<p>{userName}</p>
	</div>
);

Profile.propTypes = {
	userName: PropTypes.string
};

export default React.memo(Profile);
