import React from 'react';

import formatTime from 'util/formatTime';
import EmailListItem from './EmailListItem';

const EmailList = props => {
	const { emails, selectedEmails, addToSelectedEmails } = props;
	const emailList = emails.map(({ timestamp, ...rest }) => {
		return <EmailListItem {...{ ...rest, selectedEmails, addToSelectedEmails, timestamp: formatTime(timestamp) }} key={rest.id} />;
	});

	return <div className="email-list">{emailList}</div>;
};

export default EmailList;
