import React, { useEffect } from 'react';
import Header from 'components/header/Header';

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
			<div className="content">content</div>
		</div>
	);
};

export default React.memo(Mailbox);
