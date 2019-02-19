import React from 'react';
import classNames from 'classnames';
import CheckBox from 'components/CheckBox';

const EmailListItem = props => {
	const { selectedEmails, addToSelectedEmails, id, onEmailClick, from, subject, isRead, category, hasAttachment, timestamp } = props;
	const listClassName = classNames('email-list-item', { selected: selectedEmails.includes(id + '') || isRead });

	return (
		<div className={listClassName}>
			<div className="email-list-item__checkbox">
				<CheckBox id={id} selected={selectedEmails.includes(id)} onChange={addToSelectedEmails} />
			</div>
			<div onClick={onEmailClick} className="email-list-item__rest">
				<p className="email-list-item__from">{from.name}</p>
				<div className="email-list-item__category">{category && <button className={`chips-btn ${category.toLowerCase()}`}>{category}</button>}</div>
				<p className="email-list-item__subject">{subject || 'no subject'}</p>
				<p className="email-list-item__attachment"> {hasAttachment ? <i className="fas fa-paperclip" /> : null}</p>
				<p className="email-list-item__timestamp">{timestamp}</p>
			</div>
		</div>
	);
};

export default React.memo(EmailListItem);
