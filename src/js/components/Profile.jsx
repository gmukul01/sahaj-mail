import React from 'react';
import Avatar from 'components/Avatar';

const Profile = ({ userName }) => (
	<div className="profile">
		<Avatar />
		<p>{userName}</p>
	</div>
);

export default React.memo(Profile);
