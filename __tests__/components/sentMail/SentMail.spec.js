import React from 'react';
import renderer from 'react-test-renderer';

import SentMail from 'components/sentMail/SentMail';

describe('SentMail Component', () => {
	const mockFetchEmail = jest.fn(),
		initialProps = {
			totalUnread: 2,
			emails: [],
			fetchEmails: mockFetchEmail
		};

	afterEach(() => {
		mockFetchEmail.mockClear();
	});

	it('should match snapshot', () => {
		const inbox = renderer.create(<SentMail {...initialProps} />).toJSON();
		expect(inbox).toMatchSnapshot();
	});
});
