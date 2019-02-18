import React, { useState, useEffect } from 'react';

import TopBar from './TopBar';
import EmailList from 'components/email/EmailList';
import ActionBar from './ActionBar';

const Inbox = props => {
	const { selectedEmails, addToSelectedEmails } = selectedEmailsState([]);
	const { totalEmails, emails, fetchEmails, fetchInboxDetails } = props;
	const onRefresh = () => fetchEmails();

	useEffect(() => {
		fetchInboxDetails();
		fetchEmails();
	}, []);

	return (
		<section className="content inbox">
			<TopBar totalEmails={totalEmails} />
			<ActionBar onRefresh={onRefresh} />
			<EmailList {...{ selectedEmails, addToSelectedEmails, emails }} />
		</section>
	);
};

export default React.memo(Inbox);

const selectedEmailsState = initialValue => {
	const [emails, addEmail] = useState(initialValue);

	function handleChange(e) {
		const emailId = e.target.value,
			newSelectedEmails = emails.indexOf(emailId) === -1 ? [...emails, emailId] : emails.filter(id => id !== emailId);

		addEmail(newSelectedEmails);
	}

	return { selectedEmails: emails, addToSelectedEmails: handleChange };
};
