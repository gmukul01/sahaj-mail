import React from 'react';

const EmailListItem = props => {
	const { selectedEmails, addToSelectedEmails, id, from, subject, category, hasAttachment, timestamp } = props;

	return (
		<div className="email-list-item">
			<input className="email-list-item__checkbox" type="checkbox" defaultChecked={selectedEmails.includes(id)} onChange={addToSelectedEmails} />
			<p className="email-list-item__from">{from.name}</p>
			<p className="email-list-item__category">{category}</p>
			<p className="email-list-item__subject">{subject}</p>
			<p className="email-list-item__attachment"> {hasAttachment ? <i className="fas fa-paperclip" /> : null}</p>
			<p className="email-list-item__timestamp">{timestamp}</p>
		</div>
	);
};

export default React.memo(EmailListItem);
