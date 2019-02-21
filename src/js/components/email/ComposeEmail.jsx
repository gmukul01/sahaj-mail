import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal';
import { useFormInput } from 'effects/useFormInput';

const ComposeEmail = ({ showModal, onCloseModal, sendEmail }) => {
	const { setValue: setTo, ...to } = useFormInput(''),
		{ setValue: setSubject, ...subject } = useFormInput(''),
		{ setValue: setBody, ...body } = useFormInput(''),
		[errorMessage, setErrorMessage] = useState('');

	const onSend = () => {
		const email = {
			to: to.value,
			subject: subject.value,
			body: body.value
		};
		onCloseModal();
		sendEmail(email);
		setTo('');
		setSubject('');
		setBody('');
	};

	const handelClose = () => {
		setErrorMessage('');
		onCloseModal();
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (to.value === '' && body.value === '') setErrorMessage('Please enter details');
		else if (to.value === '') setErrorMessage('Please enter recipient email id');
		else if (body.value === '') setErrorMessage('Please enter message');
		else onSend();
	};

	return (
		<Modal {...{ showModal, onCloseModal: handelClose, header: 'New Message' }}>
			<form onSubmit={handleSubmit} className="compose-email">
				<label>To</label>
				<input type="text" {...to} placeholder="Enter recipient email id" />
				<label>Subject</label>
				<input type="text" {...subject} placeholder="Enter subject" />
				<label>Body</label>
				<textarea {...body} placeholder="Enter message" />
				<button className="button-solid" type="submit">
					Send
				</button>
			</form>
			{errorMessage && <p className="error">{errorMessage}</p>}
		</Modal>
	);
};

ComposeEmail.propTypes = {
	showModal: PropTypes.bool,
	onCloseModal: PropTypes.func,
	sendEmail: PropTypes.func
};

export default React.memo(ComposeEmail);
