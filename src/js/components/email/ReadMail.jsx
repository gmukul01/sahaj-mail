import React from 'react';

import Modal from 'components/Modal';

const ReadEmail = ({ showModal, onCloseModal, emailDetails }) => {
	return (
		<Modal {...{ showModal, onCloseModal, header: 'Read Message' }}>
			<div className="read-email">
				<div className="read-email-from">
					<label>From</label>
					<p>{emailDetails.from.email}</p>
				</div>
				<div className="read-email-subject">
					<label>Subject</label>
					<p>{emailDetails.subject}</p>
				</div>
				<p>{emailDetails.body}</p>
			</div>
		</Modal>
	);
};

export default ReadEmail;
