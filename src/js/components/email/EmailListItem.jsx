import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CheckBox from 'components/CheckBox';
import ReadEmail from './ReadMail';

const EmailListItem = props => {
	const [showModal, setModalState] = useState(false),
		onCloseModal = () => setModalState(false),
		onEmailClick = () => {
			props.onRead([props.id]);
			setModalState(true);
		},
		{ selectedEmails, addToSelectedEmails, id, from, to, subject, body, isRead, category, hasAttachment, isSentMail, timestamp } = props,
		listClassName = classNames('email-list-item', { selected: selectedEmails.includes(id + '') || isRead });

	return (
		<>
			<ReadEmail {...{ emailDetails: { from, to, subject, body }, isSentMail, showModal, onCloseModal }} />
			<div className={listClassName}>
				<div className="email-list-item__checkbox">
					<CheckBox id={id} selected={selectedEmails.includes(id)} onChange={addToSelectedEmails} />
				</div>
				<div onClick={onEmailClick} className="email-list-item__rest">
					<p className="email-list-item__from">{isSentMail ? to : from.name}</p>
					<div className="email-list-item__category">{category && <button className={`chips-btn ${category.toLowerCase()}`}>{category}</button>}</div>
					<p className="email-list-item__subject">{subject || 'no subject'}</p>
					<p className="email-list-item__attachment"> {hasAttachment ? <i className="fas fa-paperclip" /> : null}</p>
					<p className="email-list-item__timestamp">{timestamp}</p>
				</div>
			</div>
		</>
	);
};

EmailListItem.propTypes = {
	selectedEmails: PropTypes.array,
	addToSelectedEmails: PropTypes.func,
	id: PropTypes.number,
	from: PropTypes.object,
	subject: PropTypes.string,
	body: PropTypes.string,
	isRead: PropTypes.bool,
	category: PropTypes.string,
	hasAttachment: PropTypes.bool,
	timestamp: PropTypes.string
};

export default React.memo(EmailListItem);
