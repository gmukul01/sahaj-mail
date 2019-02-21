import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
			<EmailList {...{ selectedEmails, addToSelectedEmails, onRead: readEmails, emails }} />
		</section>
	);
};

Inbox.propTypes = {
	totalEmails: PropTypes.number,
	emails: PropTypes.array,
	fetchEmails: PropTypes.func,
	deleteEmails: PropTypes.func,
	readEmails: PropTypes.func,
	fetchInboxDetails: PropTypes.func
};

export default React.memo(Inbox);

const selectedEmailsState = initialValue => {
	const [emails, setValue] = useState(initialValue);

	function handleChange(e) {
		const emailId = Number(e.target.value),
			newSelectedEmails = emails.indexOf(emailId) === -1 ? [...emails, emailId] : emails.filter(id => id !== emailId);

		setValue(newSelectedEmails);
	}

	function clearSelectedEmails() {
		setValue([]);
	}

	return { selectedEmails: emails, addToSelectedEmails: handleChange, clearSelectedEmails };
};
