import React, { useState } from 'react';
import Folders from './Folders';
import Labels from './Labels';
import Categories from './Categories';
import ComposeEmail from 'components/email/ComposeEmail';

const MenuBar = ({ totalUnread, sendEmail }) => {
	const [showModal, setModalState] = useState(false),
		onCloseModal = () => setModalState(false),
		onOpenModal = () => setModalState(true);

	return (
		<section className="menubar">
			<button className="button-solid menubar-compose" onClick={onOpenModal}>
				Compose Mail
			</button>
			<ComposeEmail {...{ showModal, onCloseModal, sendEmail }} />
			<Folders totalUnread={totalUnread} />
			<Categories />
			<Labels />
		</section>
	);
};

export default React.memo(MenuBar);
