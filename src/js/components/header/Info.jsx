import React from 'react';
import Logout from './Logout';
import Badge from '../Badge';

const Info = ({ onLogoutClick, totalUnread }) => {
	return (
		<div className="header-info">
			<Badge className="badge-email" badgeContent={totalUnread}>
				<i className="fas fa-envelope" />
			</Badge>
			<Badge className="badge-notification" badgeContent={4}>
				<i className={`fas fa-bell`} />
			</Badge>
			<Logout {...{ onLogoutClick }} />
		</div>
	);
};

export default Info;
