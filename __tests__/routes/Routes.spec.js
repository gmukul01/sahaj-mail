import React from 'react';
import { shallow } from 'enzyme';

import LoginPage from 'containers/pages/LoginPage';
import Routes from 'components/routes/Routes';

describe('Routes Component', () => {
	let wrapper;

	it("should render Login component if path is '/login'", () => {
		wrapper = shallow(<Routes />);
		expect(wrapper.find({ path: '/login' }).prop('component')).toEqual(LoginPage);
	});
});
