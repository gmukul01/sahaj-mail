import React from 'react';

const EmailListItem = props => {
	const { selectedEmails, addToSelectedEmails, id, from, subject, category, hasAttachment, timestamp } = props;

	return (
		<div className="email-list-item">
			<div className="email-list-item__checkbox">
				<input className="styled-checkbox" value={id} type="checkbox" id={`checkbox-${id}`} defaultChecked={selectedEmails.includes(id)} onChange={addToSelectedEmails} />
				<label htmlFor={`checkbox-${id}`} />
			</div>
			<p className="email-list-item__from">{from.name}</p>
			<div className="email-list-item__category">
				<button className={`chips-btn ${category.toLowerCase()}`}>{category}</button>
			</div>
			<p className="email-list-item__subject">{subject}</p>
			<p className="email-list-item__attachment"> {hasAttachment ? <i className="fas fa-paperclip" /> : null}</p>
			<p className="email-list-item__timestamp">{timestamp}</p>
		</div>
	);
};

export default React.memo(EmailListItem);
