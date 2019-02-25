import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import MailBox from 'containers/pages/MailBox';
import { fetchInboxDetails } from 'actions/inbox';

const mockStore = configureMockStore();

describe('Inbox Container', () => {
	let mailBox, store;
	const initialState = {
		user: {
			name: 'Dummy Name',
			email: 'dummy@email.com'
		},
		sent: {
			emails: []
		},
		inbox: {
			pageNumber: 1,
			totalEmails: 2,
			emailsPerPage: 20,
			emails: []
		}
	};

	beforeEach(() => {
		store = mockStore(initialState);
		const wrapper = mount(
			<Provider store={store}>
				<BrowserRouter>
					<MailBox match={{ path: '/sent' }} />
				</BrowserRouter>
			</Provider>
		);
		mailBox = wrapper.find('MailBox');
	});

	it('should dispatch fetchInboxDetails action when fetchInboxDetails is called', () => {
		mailBox.prop('fetchInboxDetails')();
		const actions = store.getActions();
		expect(actions[0]).toEqual(fetchInboxDetails());
	});
});
