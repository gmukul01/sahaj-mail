import React from 'react';
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

export default React.memo(Modal);
