import React from 'react';
import PropTypes from 'prop-types';

import formatTime from 'util/formatTime';
import EmailListItem from './EmailListItem';

const EmailList = ({ onRead, emails, selectedEmails, addToSelectedEmails }) => {
	const emailList = emails.map(({ timestamp, ...rest }) => {
		return <EmailListItem key={rest.id} {...{ ...rest, selectedEmails, addToSelectedEmails, onRead, timestamp: formatTime(timestamp) }} />;
	});

	return <div className="email-list">{emailList}</div>;
};

EmailList.propTypes = {
	onRead: PropTypes.func.isRequired,
	emails: PropTypes.array.isRequired,
	selectedEmails: PropTypes.array.isRequired,
	addToSelectedEmails: PropTypes.func.isRequired
};

export default React.memo(EmailList);
