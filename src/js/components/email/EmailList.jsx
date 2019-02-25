import React from 'react';
import PropTypes from 'prop-types';

import formatTime from 'util/formatTime';
import EmailListItem from './EmailListItem';

const EmailList = ({ onRead, emails, isSentMail, selectedEmails, addToSelectedEmails }) => {
	const emailList = emails.map(({ timestamp, ...rest }) => {
		return (
			<EmailListItem key={rest.id} {...{ ...rest, isSentMail, selectedEmails, addToSelectedEmails, onRead, timestamp: formatTime(timestamp) }} />
		);
	});

	return <div className="email-list">{emailList}</div>;
};

EmailList.propTypes = {
	isSentMail: PropTypes.bool,
	onRead: PropTypes.func.isRequired,
	emails: PropTypes.array.isRequired,
	selectedEmails: PropTypes.array.isRequired,
	addToSelectedEmails: PropTypes.func.isRequired
};

export default React.memo(EmailList);
