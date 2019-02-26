import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import SideBar from 'components/sidebar/SideBar';
import Header from 'components/header/Header';
import Inbox from 'containers/inbox/Inbox';
import MenuBar from 'containers/menubar/MenuBar';
import SentMail from 'containers/sentMail/SentMail';

const MailBox = ({ match, fetchInboxDetails }) => {
	const [sidebarState, setSidebarState] = useState(false),
		handleSidebarOpen = () => setSidebarState(!sidebarState),
		mailBoxClass = classNames('mailbox', { 'sidebar-open': sidebarState });

	useEffect(() => {
		fetchInboxDetails();
	}, []);

	return (
		<div className={mailBoxClass}>
			<SideBar sidebarState={sidebarState} handleSidebarOpen={handleSidebarOpen} />
			<Header handleSidebarOpen={handleSidebarOpen} />
			<MenuBar match={match} />
			{match.path === '/sent' ? <SentMail /> : <Inbox />}
		</div>
	);
};

export default React.memo(MailBox);
