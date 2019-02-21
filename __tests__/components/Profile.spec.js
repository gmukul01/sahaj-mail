import React from 'react';
import renderer from 'react-test-renderer';

import Profile from 'components/Profile';

describe('Profile Component', () => {
	it('should match snapshot', () => {
		const profile = renderer.create(<Profile userName="DummyName" />).toJSON();
		expect(profile).toMatchSnapshot();
	});
});
