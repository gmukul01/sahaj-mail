import React, { useState } from 'react';
import Folders from './Folders';
import Labels from './Labels';
import Categories from './Categories';
import ComposeEmail from 'components/email/ComposeEmail';

const MenuBar = ({ totalUnread }) => {
	const [showModal, setModalState] = useState(false);

	const onCloseModal = () => setModalState(false);
	const onOpenModal = () => setModalState(true);

	return (
		<section className="menubar">
			<button className="button-solid menubar-compose" onClick={onOpenModal}>
				Compose Mail
			</button>
			<ComposeEmail {...{ showModal, onCloseModal }} />
			<Folders totalUnread={totalUnread} />
			<Categories />
			<Labels />
		</section>
	);
};

export default React.memo(MenuBar);
