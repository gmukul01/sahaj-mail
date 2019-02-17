import React from 'react';
import Logout from 'containers/header/Logout';
import Badge from './Badge';

const Info = () => {
	return (
		<div className="header-info">
			<button class="badge-email">
				<i class="fas fa-envelope" />
				<Badge>14</Badge>
			</button>

			<button class="badge-notification">
				<i className={`fas fa-bell`} />
				<Badge>12</Badge>
			</button>
			<Logout />
		</div>
	);
};

export default Info;
