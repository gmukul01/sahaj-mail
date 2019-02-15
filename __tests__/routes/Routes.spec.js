import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from 'containers/pages/Loginpage';
import Routes from 'routes/Routes';

describe('Routes Component', () => {
	let wrapper;

	it("should render Home component if path is '/'", () => {
		wrapper = shallow(<Routes isUserLoggedIn />);
		expect(wrapper.find({ path: '/' }).prop('component')).toEqual(LoginPage);
	});
});
