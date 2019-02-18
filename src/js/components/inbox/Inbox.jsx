import React, { useState } from 'react';

import TopBar from './TopBar';
import EmailList from 'components/email/EmailList';

const Inbox = ({ totalEmails, emails }) => {
	const [selectedEmails, addToSelectedEmails] = useState([]);

	return (
		<section className="content inbox">
			<TopBar totalEmails={totalEmails} />
			<EmailList {...{ selectedEmails, addToSelectedEmails, emails }} />
		</section>
	);
};

export default React.memo(Inbox);
