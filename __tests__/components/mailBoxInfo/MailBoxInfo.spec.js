import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import MailBoxInfo from 'components/mailBoxInfo/MailBoxInfo';

describe('MailBoxInfo Component', () => {
	const mockFetchEmail = jest.fn(),
		mockDeleteEmail = jest.fn(),
		mockReadEmail = jest.fn(),
		initialProps = {
			totalUnread: 2,
			emails: [],
			fetchEmails: mockFetchEmail,
			deleteEmails: mockDeleteEmail,
			readEmails: mockReadEmail,
			title: 'Inbox'
		};

	afterEach(() => {
		mockFetchEmail.mockClear();
		mockDeleteEmail.mockClear();
		mockReadEmail.mockClear();
	});

	it('should match snapshot', () => {
		const mailBoxInfo = renderer.create(<MailBoxInfo {...initialProps} />).toJSON();
		expect(mailBoxInfo).toMatchSnapshot();
	});

	it('should call fetchEmails when refresh is clicked', () => {
		const mailBoxInfo = shallow(<MailBoxInfo {...initialProps} />);
		mailBoxInfo.find('ActionBar').prop('onRefresh')();
		expect(mockFetchEmail.mock.calls.length).toBe(1);
	});

	it('should call deleteEmails when delete is clicked', () => {
		const mailBoxInfo = shallow(<MailBoxInfo {...initialProps} />);
		mailBoxInfo.find('ActionBar').prop('onDelete')();
		expect(mockDeleteEmail.mock.calls.length).toBe(1);
	});

	it('should call onRead when read is clicked', () => {
		const mailBoxInfo = shallow(<MailBoxInfo {...initialProps} />);
		mailBoxInfo.find('ActionBar').prop('onRead')();
		expect(mockReadEmail.mock.calls.length).toBe(1);
	});
});
