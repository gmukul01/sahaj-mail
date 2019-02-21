import React from 'react';
import PropTypes from 'prop-types';

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

ReadEmail.propTypes = {
	showModal: PropTypes.bool,
	onCloseModal: PropTypes.func,
	emailDetails: PropTypes.object
};

export default React.memo(ReadEmail);
