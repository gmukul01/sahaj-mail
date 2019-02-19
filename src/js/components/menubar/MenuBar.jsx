import React, { useState } from 'react';
import Modal from 'components/Modal';
import Folders from './Folders';
import Labels from './Labels';
import Categories from './Categories';
import { useFormInput } from 'effects/useFormInput';
import ComposeEmail from 'components/email/ComposeEmail';

const MenuBar = ({ totalUnread }) => {
	const [showModal, setModalState] = useState(false),
		to = useFormInput(''),
		cc = useFormInput(''),
		subject = useFormInput(''),
		body = useFormInput('');

	const onCloseModal = () => setModalState(false);
	const onOpenModal = () => setModalState(true);
	const onSend = () => {
		const email = {
			to: to.value,
			cc: cc.value,
			subject: subject.value,
			body: body.value
		};
		console.log('Email fields=> ', email);
	};
	return (
		<section className="menubar">
			<Modal {...{ showModal, onCloseModal, confirmText: 'Send', header: 'New Message' }}>
				<ComposeEmail {...{ to, cc, subject, body }} />
			</Modal>

			<button className="button-solid menubar-compose" onClick={onOpenModal}>
				Compose Mail
			</button>
			<Folders totalUnread={totalUnread} />
			<Categories />
			<Labels />
		</section>
	);
};

export default React.memo(MenuBar);
