import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import EmailList from 'components/email/EmailList';

const Inbox = props => {
	const { selectedEmails, addToSelectedEmails } = selectedEmailsState([]);
	const { emails, fetchEmails } = props;

	useEffect(() => {
		fetchEmails();
	}, []);

	function onRead() {}

	return (
		<section className="content sentMail">
			<EmailList isSentMail {...{ selectedEmails, addToSelectedEmails, onRead, emails }} />
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

	return { selectedEmails: emails, addToSelectedEmails: handleChange };
};
