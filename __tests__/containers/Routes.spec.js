import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import Routes from 'containers/Routes';

const mockStore = configureMockStore();

describe('Routes Container', () => {
	const initialState = {
			user: {
				name: 'Dummy name',
				email: 'Dummy email'
			},
			inbox: {
				pageNumber: 1,
				totalEmails: 2,
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
		store = mockStore(initialState),
		routes = mount(
			<Provider store={store}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</Provider>
		).find('Routes');

	it('should map correct store value to props', () => {
		expect(routes.prop('isUserLoggedIn')).toBeTruthy();
	});
});
