import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import MenuBar from 'components/menubar/MenuBar';

describe('MenuBar Component', () => {
	const mockSendEmail = jest.fn(),
		initialProps = {
			totalUnread: 2,
			sendEmail: mockSendEmail
		};

	it('should match snapshot', () => {
		const menubar = renderer
			.create(
				<BrowserRouter>
					<MenuBar {...initialProps} />
				</BrowserRouter>
			)
			.toJSON();
		expect(menubar).toMatchSnapshot();
	});

	it('should call mockSendEmail when sendEmail is called', () => {
		const menubar = shallow(<MenuBar {...initialProps} />);
		menubar.find('ComposeEmail').prop('sendEmail')('Dummy');
		expect(mockSendEmail.mock.calls[0][0]).toBe('Dummy');
	});
});
