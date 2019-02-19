import React from 'react';

const Folders = ({ totalUnread }) => {
	const data = [
		{ name: 'Inbox', icon: 'inbox', count: totalUnread },
		{ name: 'Send Email', icon: 'envelope' },
		{ name: 'Important', icon: 'certificate' },
		{ name: 'Drafts', icon: 'file-alt', count: 2 },
		{ name: 'Trash', icon: 'trash-alt' }
	];
	return (
		<div className={'menubar-folders'}>
			<h5>FOLDERS</h5>
			<ul>
				{data.map(folder => (
					<li key={folder.name}>
						<span>
							<i className={`fas fa-${folder.icon}`} />
							{folder.name}
						</span>
						{folder.count && folder.count !== 0 ? <button className={`menubar-folders-${folder.name.toLowerCase()} chips-btn`}>{folder.count}</button> : null}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Folders;
