import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import TopBar from './TopBar';
import EmailList from 'components/email/EmailList';
import ActionBar from './ActionBar';

const MailBoxInfo = props => {
	const { selectedEmails, addToSelectedEmails, clearSelectedEmails } = selectedEmailsState([]);
	const { totalEmails, emails, isSentMail, fetchEmails, deleteEmails, readEmails, title } = props;

	useEffect(() => {
		fetchEmails();
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
		<section className="content mailBoxInfo">
			<TopBar title={title} totalEmails={totalEmails} />
			<ActionBar {...{ onRefresh, onDelete, onRead }} />
			<EmailList isSentMail={isSentMail} {...{ selectedEmails, addToSelectedEmails, onRead: readEmails, emails }} />
		</section>
	);
};

MailBoxInfo.propTypes = {
	totalEmails: PropTypes.number,
	emails: PropTypes.array,
	fetchEmails: PropTypes.func,
	deleteEmails: PropTypes.func,
	readEmails: PropTypes.func,
	fetchInboxDetails: PropTypes.func
};

export default React.memo(MailBoxInfo);

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
