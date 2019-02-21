import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Mailbox from 'components/pages/Mailbox';

const mockStore = configureMockStore();

describe('Mailbox Component', () => {
	const initialState = {
			user: { name: 'dummy name', email: 'dummy@email.com' },
			inbox: {
				pageNumber: 1,
				totalEmails: 2,
				totalUnread: 2,
				emailsPerPage: 20,
				emails: [
					{
						id: 1,
						from: {
							name: 'dummyFrom1',
							email: 'dummyFrom1@email.com'
						},
						isRead: true
					},
					{
						id: 2,
						from: {
							name: 'dummyFrom2',
							email: 'dummyFrom2@email.com'
						},
						isRead: false
					}
				]
			}
		},
		store = mockStore(initialState);

	it('should match snapshot', () => {
		expect(
			renderer
				.create(
					<Provider store={store}>
						<Mailbox />
					</Provider>
				)
				.toJSON()
		).toMatchSnapshot();
	});
});
