import React, { useState } from 'react';

import TopBar from './TopBar';
import EmailList from 'components/email/EmailList';
import ActionBar from './ActionBar';

const Inbox = ({ totalEmails, emails }) => {
	const { selectedEmails, addToSelectedEmails } = selectedEmailsState([]);

	return (
		<section className="content inbox">
			<TopBar totalEmails={totalEmails} />
			<ActionBar />
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
