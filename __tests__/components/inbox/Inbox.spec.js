import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Inbox from 'components/inbox/Inbox';

describe('Inbox Component', () => {
	const mockFetchEmail = jest.fn(),
		mockDeleteEmail = jest.fn(),
		mockReadEmail = jest.fn(),
		initialProps = {
			totalUnread: 2,
			emails: [],
			fetchEmails: mockFetchEmail,
			deleteEmails: mockDeleteEmail,
			readEmails: mockReadEmail
		};

	afterEach(() => {
		mockFetchEmail.mockClear();
		mockDeleteEmail.mockClear();
		mockReadEmail.mockClear();
	});

	it('should match snapshot', () => {
		const inbox = renderer.create(<Inbox {...initialProps} />).toJSON();
		expect(inbox).toMatchSnapshot();
	});

	it('should call fetchEmails when refresh is clicked', () => {
		const inbox = shallow(<Inbox {...initialProps} />);
		inbox.find('ActionBar').prop('onRefresh')();
		expect(mockFetchEmail.mock.calls.length).toBe(1);
	});

	it('should call deleteEmails when delete is clicked', () => {
		const inbox = shallow(<Inbox {...initialProps} />);
		inbox.find('ActionBar').prop('onDelete')();
		expect(mockDeleteEmail.mock.calls.length).toBe(1);
	});

	it('should call onRead when read is clicked', () => {
		const inbox = shallow(<Inbox {...initialProps} />);
		inbox.find('ActionBar').prop('onRead')();
		expect(mockReadEmail.mock.calls.length).toBe(1);
	});
});
