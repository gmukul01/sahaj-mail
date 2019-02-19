import React from 'react';
import Header from 'components/header/Header';
import Inbox from 'containers/inbox/Inbox';
import MenuBar from 'containers/menubar/MenuBar';

const Mailbox = props => {
	return (
		<div className="mailbox">
			<div className="sidebar">sidebar</div>
			<Header />
			<MenuBar />
			<Inbox />
		</div>
	);
};

export default React.memo(Mailbox);
