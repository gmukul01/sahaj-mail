import React, { useEffect } from 'react';
import Header from 'components/header/Header';
import Inbox from 'containers/inbox/Inbox';
import MenuBar from 'components/menubar/MenuBar';

const Mailbox = props => {
	const { pageNumber, emailsPerPage, fetchInboxDetails, fetchInboxEmails } = props;

	useEffect(() => {
		fetchInboxDetails();
		fetchInboxEmails(pageNumber, emailsPerPage);
	}, []);

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
