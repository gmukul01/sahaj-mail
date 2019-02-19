import React from 'react';

const SideBar = ({ handleSidebarOpen }) => {
	const sidebarIcons = [
		{ iconType: 'fa-th-large', name: 'Dashboard', isActive: false },
		{ iconType: 'far fa-gem', name: 'Layout', isActive: false },
		{ iconType: 'fa-chart-bar', name: 'Graphs', isActive: false },
		{ iconType: 'fa-envelope', name: 'Mailbox', isActive: true },
		{ iconType: 'fa-chart-pie', name: 'Metrics', isActive: false },
		{ iconType: 'fa-flask', name: 'Widgets', isActive: false },
		{ iconType: 'far fa-sticky-note', name: 'Notes', isActive: false },
		{ iconType: 'fas fa-tv', name: 'App Views', isActive: false },
		{ iconType: 'far fa-copy', name: 'Random', isActive: false },
		{ iconType: 'fas fa-globe-asia', name: 'Globe', isActive: false },
		{ iconType: 'fa-flask', name: 'Widgets', isActive: false },
		{ iconType: 'fas fa-laptop', name: 'Apps', isActive: false }
	];

	return (
		<section className="sidebar" onClick={handleSidebarOpen}>
			<button className="sidebar-row logo">IN+</button>
			{sidebarIcons.map((icon, index) => (
				<div className={`sidebar-row ${icon.isActive ? 'active' : ''}`}>
					<button key={`${icon.iconType}${index}`}>
						<i className={`fas ${icon.iconType}`} />
						<p>{icon.name}</p>
					</button>
					<i className="fas fa-angle-left sidebar-dropdown" />
				</div>
			))}
		</section>
	);
};

export default React.memo(SideBar);
