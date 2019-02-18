import React, { useState, useEffect } from 'react';

import TopBar from './TopBar';
import EmailList from 'components/email/EmailList';
import ActionBar from './ActionBar';

const Inbox = props => {
	const { selectedEmails, addToSelectedEmails, clearSelectedEmails } = selectedEmailsState([]);
	const { totalEmails, emails, fetchEmails, deleteEmails, readEmails, fetchInboxDetails } = props;

	useEffect(() => {
		fetchEmails();
		fetchInboxDetails();
	}, []);

	function onRead() {
		readEmails(selectedEmails);
		clearSelectedEmails();
	}

	function onDelete() {
		deleteEmails(selectedEmails);
		clearSelectedEmails();
	}

	function onRefresh() {
		fetchEmails();
		clearSelectedEmails();
	}

	return (
		<section className="content inbox">
			<TopBar totalEmails={totalEmails} />
			<ActionBar {...{ onRefresh, onDelete, onRead }} />
			<EmailList {...{ selectedEmails, addToSelectedEmails, emails }} />
		</section>
	);
};

export default React.memo(Inbox);

const selectedEmailsState = initialValue => {
	const [emails, setValue] = useState(initialValue);

	function handleChange(e) {
		const emailId = e.target.value,
			newSelectedEmails = emails.indexOf(emailId) === -1 ? [...emails, emailId] : emails.filter(id => id !== emailId);

		setValue(newSelectedEmails);
	}

	function clearSelectedEmails() {
		setValue([]);
	}

	return { selectedEmails: emails, addToSelectedEmails: handleChange, clearSelectedEmails };
};
