import React from 'react';
import renderer from 'react-test-renderer';

import Avatar from 'components/Avatar';

describe('Avatar Component', () => {
	it('should match snapshot', () => {
		const avatar = renderer.create(<Avatar />).toJSON();
		expect(avatar).toMatchSnapshot();
	});
});
