import React from 'react';
import classNames from 'classnames';
import CheckBox from 'components/CheckBox';

const EmailListItem = props => {
	const { selectedEmails, addToSelectedEmails, id, from, subject, category, hasAttachment, timestamp } = props;
	const listClassName = classNames('email-list-item', { selected: selectedEmails.includes(id + '') });

	return (
		<div className={listClassName}>
			<div className="email-list-item__checkbox">
				<CheckBox id={id} selected={selectedEmails.includes(id)} onChange={addToSelectedEmails} />
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
