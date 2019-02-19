import React from 'react';

import formatTime from 'util/formatTime';
import EmailListItem from './EmailListItem';

const EmailList = ({ onRead, emails, selectedEmails, addToSelectedEmails }) => {
	const emailList = emails.map(({ timestamp, ...rest }) => {
		return <EmailListItem key={rest.id} {...{ ...rest, selectedEmails, addToSelectedEmails, onRead, timestamp: formatTime(timestamp) }} />;
	});

	return <div className="email-list">{emailList}</div>;
};

export default EmailList;
