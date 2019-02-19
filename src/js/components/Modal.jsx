import React from 'react';
import classNames from 'classnames';

const Modal = props => {
	const { showModal, onCloseModal, onConfirmModal, confirmText, header } = props;
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
				<div className="modal-footer">
					<button className="button-solid" onClick={onConfirmModal}>
						{confirmText}
					</button>
				</div>
			</div>
		</div>
	);
};

export default React.memo(Modal);
