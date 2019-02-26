import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import SentMail from 'containers/sentMail/SentMail';
import { fetchEmails } from 'actions/emails';

const mockStore = configureMockStore();
describe('Inbox Container', () => {
	let mailBoxInfo, store;
	const initialState = {
		sent: {
			pageNumber: 1,
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
	};

	beforeEach(() => {
		store = mockStore(initialState);
		const wrapper = mount(
			<Provider store={store}>
				<SentMail />
			</Provider>
		);
		mailBoxInfo = wrapper.find('MailBoxInfo');
	});

	it('should map correct store value to props', () => {
		expect(mailBoxInfo.prop('title')).toBe('Sent');
		expect(mailBoxInfo.prop('emails')).toBe(initialState.sent.emails);
		expect(mailBoxInfo.prop('totalEmails')).toBe(initialState.sent.emails.length);
		expect(mailBoxInfo.prop('pageNumber')).toBe(initialState.sent.pageNumber);
		expect(mailBoxInfo.prop('emailsPerPage')).toBe(initialState.sent.emailsPerPage);
	});

	it('should dispatch fetchEmails action when fetchEmails is called', () => {
		mailBoxInfo.prop('fetchEmails')();
		const actions = store.getActions();
		expect(actions[0]).toEqual(fetchEmails('sent', 1, 20));
	});
});
