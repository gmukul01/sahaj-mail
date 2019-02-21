import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import Inbox from 'containers/inbox/Inbox';
import { fetchInboxDetails } from 'actions/inbox';
import { fetchEmails, deleteEmails, readEmails } from 'actions/emails';

const mockStore = configureMockStore();
describe('Inbox Container', () => {
	let inbox, store;
	const initialState = {
		inbox: {
			pageNumber: 1,
			totalEmails: 2,
			emailsPerPage: 20,
			emails: [{ id: 1, from: 'dummyFrom', isRead: true }, { id: 2, from: 'dummyFrom', isRead: false }]
		}
	};

	beforeEach(() => {
		store = mockStore(initialState);
		const wrapper = mount(
			<Provider store={store}>
				<Inbox />
			</Provider>
		);
		inbox = wrapper.find('Inbox');
	});

	it('should map correct store value to props', () => {
		expect(inbox.prop('emails')).toBe(initialState.inbox.emails);
		expect(inbox.prop('totalEmails')).toBe(initialState.inbox.totalEmails);
		expect(inbox.prop('pageNumber')).toBe(initialState.inbox.pageNumber);
		expect(inbox.prop('emailsPerPage')).toBe(initialState.inbox.emailsPerPage);
	});

	it('should dispatch fetchInboxDetails action on calling fetchInboxDetails', () => {
		inbox.prop('fetchInboxDetails')();
		const actions = store.getActions();
		expect(actions[0]).toEqual(fetchInboxDetails());
	});

	it('should dispatch fetchEmails action on calling fetchEmails', () => {
		inbox.prop('fetchEmails')();
		const actions = store.getActions();
		expect(actions[0]).toEqual(fetchEmails('inbox', 1, 20));
	});

	it('should dispatch deleteEmails action on calling deleteEmails', () => {
		inbox.prop('deleteEmails')([1, 2]);
		const actions = store.getActions();
		expect(actions[0]).toEqual(deleteEmails('inbox', [1, 2], 1, 20));
	});

	it('should dispatch readEmails action on calling readEmails', () => {
		inbox.prop('readEmails')([1, 2]);
		const actions = store.getActions();
		expect(actions[0]).toEqual(readEmails('inbox', [2], 1, 20));
	});
});
