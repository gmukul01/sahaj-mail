import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import MenuBar from 'containers/menubar/MenuBar';
import { sendEmail } from 'actions/emails';

const mockStore = configureMockStore();
describe('MenuBar Container', () => {
	let menubar, store;
	const initialState = {
		user: {
			name: 'Dummy Name',
			email: 'dummy@email.com'
		},
		inbox: {
			pageNumber: 1,
			totalUnread: 2,
			emailsPerPage: 20
		}
	};

	beforeEach(() => {
		store = mockStore(initialState);
		const wrapper = mount(
			<Provider store={store}>
				<MenuBar />
			</Provider>
		);
		menubar = wrapper.find('MenuBar');
	});

	it('should map correct store value to props', () => {
		expect(menubar.prop('name')).toBe(initialState.user.name);
		expect(menubar.prop('email')).toBe(initialState.user.email);
		expect(menubar.prop('pageNumber')).toBe(initialState.inbox.pageNumber);
		expect(menubar.prop('emailsPerPage')).toBe(initialState.inbox.emailsPerPage);
		expect(menubar.prop('totalUnread')).toBe(initialState.inbox.totalUnread);
	});

	it('should dispatch sendEmail action when sendEmail is called', () => {
		const emailDatails = { to: 'Dummy2@email.com', body: 'dummyMessage' },
			newEmailDetails = {
				...emailDatails,
				from: { ...initialState.user },
				isRead: false,
				timestamp: Date.now(),
				hasAttachment: false
			};
		menubar.prop('sendEmail')(emailDatails);
		const actions = store.getActions();
		expect(actions[0]).toEqual(sendEmail(newEmailDetails, 'inbox', 1, 20));
	});
});
