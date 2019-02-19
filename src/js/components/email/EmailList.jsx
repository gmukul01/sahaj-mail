import React, { useState, Fragment } from 'react';

import formatTime from 'util/formatTime';
import EmailListItem from './EmailListItem';
import ReadEmail from './ReadMail';

const EmailList = ({ onRead, emails, selectedEmails, addToSelectedEmails }) => {
	const [showModal, setModalState] = useState(false),
		onCloseModal = () => setModalState(false),
		onOpenModal = id => {
			onRead([id]);
			setModalState(true);
		},
		emailList = emails.map(({ timestamp, ...rest }) => {
			const onEmailClick = () => onOpenModal(rest.id);
			return (
				<Fragment key={rest.id}>
					<ReadEmail {...{ emailDetails: rest, showModal, onCloseModal }} />
					<EmailListItem {...{ ...rest, selectedEmails, addToSelectedEmails, onEmailClick, timestamp: formatTime(timestamp) }} />
				</Fragment>
			);
		});

	return <div className="email-list">{emailList}</div>;
};

export default EmailList;
