import React, { useState } from 'react';

import Modal from 'components/Modal';
import { useFormInput } from 'effects/useFormInput';

const ComposeEmail = ({ showModal, onCloseModal, sendEmail }) => {
	const to = useFormInput(''),
		subject = useFormInput(''),
		body = useFormInput(''),
		[errorMessage, setErrorMessage] = useState('');

	const onSend = () => {
		const email = {
			to: to.value,
			subject: subject.value,
			body: body.value
		};
		onCloseModal();
		sendEmail(email);
	};

	const handelClose = () => {
		setErrorMessage('');
		onCloseModal();
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (to.value === '' && body.value === '') setErrorMessage('Please enter details');
		if (to.value === '') setErrorMessage('Please enter To');
		else if (body.value === '') setErrorMessage('Please enter Body');
		else onSend();
	};

	return (
		<Modal {...{ showModal, onCloseModal: handelClose, header: 'New Message' }}>
			<form onSubmit={handleSubmit} className="compose-email">
				<label>To</label>
				<input type="text" {...to} />
				<label>Subject</label>
				<input type="text" {...subject} />
				<label>Body</label>
				<textarea {...body} />
				<button className="button-solid" type="submit">
					Send
				</button>
			</form>
			{errorMessage && <p className="error">{errorMessage}</p>}
		</Modal>
	);
};

export default ComposeEmail;
