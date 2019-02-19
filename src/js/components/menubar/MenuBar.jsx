import React from 'react';
import Folders from './Folders';
import Labels from './Labels';
import Categories from './Categories';

const MenuBar = ({ totalUnread }) => (
	<section className="menubar">
		<button className="button-solid menubar-compose">Compose Mail</button>
		<Folders totalUnread={totalUnread} />
		<Categories />
		<Labels />
	</section>
);

export default React.memo(MenuBar);
