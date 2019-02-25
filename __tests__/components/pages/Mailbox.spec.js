import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Mailbox from 'components/pages/MailBox';

const mockStore = configureMockStore();

describe('Mailbox Component', () => {
	let mailBox;
	const mockFetchInboxDetails = jest.fn();
	const initialState = {
			user: { name: 'dummy name', email: 'dummy@email.com' },
			sent: { emails: [] },
			inbox: {
				pageNumber: 1,
				totalEmails: 2,
				totalUnread: 2,
				emailsPerPage: 20,
				emails: []
			}
		},
		store = mockStore(initialState);

	beforeEach(() => {
		mailBox = (
			<Provider store={store}>
				<BrowserRouter>
					<Mailbox match={{ path: '/sent' }} fetchInboxDetails={mockFetchInboxDetails} />
				</BrowserRouter>
			</Provider>
		);
	});

	afterEach(() => {
		mockFetchInboxDetails.mockClear();
	});

	it('should match snapshot when path is /', () => {
		expect(renderer.create(mailBox).toJSON()).toMatchSnapshot();
	});

	it('should match snapshot when path is /sent', () => {
		expect(renderer.create(mailBox).toJSON()).toMatchSnapshot();
	});

	it('should call fetchInboxDetails on render', () => {
		renderer.create(mailBox);
		expect(mockFetchInboxDetails.mock.calls.length).toBe(1);
	});
});
