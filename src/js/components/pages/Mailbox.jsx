import React, { useState } from 'react';
import classNames from 'classnames';

import SideBar from 'components/sidebar/SideBar';
import Header from 'components/header/Header';
import Inbox from 'containers/inbox/Inbox';
import MenuBar from 'containers/menubar/MenuBar';

const Mailbox = () => {
	const [sidebarState, setSidebarState] = useState(false),
		handleSidebarOpen = () => setSidebarState(!sidebarState),
		mailBoxClass = classNames('mailbox', { 'sidebar-open': sidebarState });

	return (
		<div className={mailBoxClass}>
			<SideBar sidebarState={sidebarState} handleSidebarOpen={handleSidebarOpen} />
			<Header />
			<MenuBar />
			<Inbox />
		</div>
	);
};

export default React.memo(Mailbox);
