import React from 'react';

import Modal from 'components/Modal';
import { useFormInput } from 'effects/useFormInput';

const ComposeEmail = ({ showModal, onCloseModal, sendEmail }) => {
	const to = useFormInput(''),
		subject = useFormInput(''),
		body = useFormInput('');

	const onSend = () => {
		const email = {
			to: to.value,
			subject: subject.value,
			body: body.value
		};
		onCloseModal();
		sendEmail(email);
	};

	return (
		<Modal {...{ showModal, onCloseModal, onConfirmModal: onSend, confirmText: 'Send', header: 'New Message' }}>
			<div className="compose-email">
				<div className="email-field">
					<label>To</label>
					<input type="text" {...to} />
				</div>

				<div className="email-field">
					<label>Subject</label>
					<input type="text" {...subject} />
				</div>

				<div className="email-field">
					<label>Body</label>
					<input type="text" {...body} />
				</div>
			</div>
		</Modal>
	);
};

export default ComposeEmail;
