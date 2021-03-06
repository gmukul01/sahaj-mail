import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Folders = ({ totalUnread, match }) => {
	const data = [
		{ name: 'Inbox', to: '/', icon: 'inbox', count: totalUnread },
		{ name: 'Send Email', to: '/sent', icon: 'envelope' },
		{ name: 'Important', icon: 'certificate' },
		{ name: 'Drafts', icon: 'file-alt', count: 2 },
		{ name: 'Trash', icon: 'trash-alt' }
	];

	return (
		<nav className={'menubar-folders'}>
			<h5>FOLDERS</h5>
			<ul>
				{data.map(folder => {
					const linkClass = classNames({ active: match.path === folder.to });
					return (
						<li key={folder.name}>
							<Link to={folder.to || ''} className={linkClass}>
								<span>
									<i className={`fas fa-${folder.icon}`} />
									{folder.name}
								</span>
								{folder.count && folder.count !== 0 ? (
									<button className={`menubar-folders-${folder.name.toLowerCase()} chips-btn`}>{folder.count}</button>
								) : null}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

Folders.propTypes = {
	totalUnread: PropTypes.number
};

export default React.memo(Folders);
