import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

const Modal = props => {
	const { showModal, onCloseModal, header } = props;
	const modalClassName = classNames('modal', { open: showModal });

	return (
		<div className={modalClassName}>
			<div className="modal-content">
				<div className="modal-header">
					<h3 className="title">{header}</h3>
					<button className="modal-close" onClick={onCloseModal}>
						×
					</button>
				</div>
				<div className="modal-body">{props.children}</div>
			</div>
		</div>
	);
};

Modal.propTypes = {
	showModal: PropTypes.bool,
	onCloseModal: PropTypes.func,
	header: PropTypes.string
};

export default React.memo(Modal);
