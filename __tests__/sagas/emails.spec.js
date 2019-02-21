import { all, call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_EMAILS, DELETE_EMAILS, READ_EMAILS, SEND_EMAIL } from 'constants/actionTypes';
import { fetchEmailsSuccess, fetchEmails } from 'actions/emails';
import { fetchInboxDetails } from 'actions/inbox';
import fetch from 'util/fetch';
import { saveState } from 'util/localStorage';
import * as URL from 'constants/urls';
import emailSaga, { fetcEmailsSaga, deleteEmailsSaga, readEmailSaga, sendEmailSaga } from 'sagas/email';

saveState({});
describe('Email saga', () => {
	beforeAll(() => {
		saveState({
			user: {
				id: 321,
				name: 'Dummy Name',
				email: 'dummy@email.com',
				accessToken: 'dummyAccessToken'
			}
		});
	});

	afterAll(() => {
		saveState(undefined);
	});

	it('should listen FETCH_EMAILS, DELETE_EMAILS, READ_EMAILS, SEND_EMAIL', () => {
		const gen = emailSaga();
		expect(gen.next().value).toEqual(
			all([
				takeLatest(FETCH_EMAILS, fetcEmailsSaga),
				takeLatest(DELETE_EMAILS, deleteEmailsSaga),
				takeLatest(READ_EMAILS, readEmailSaga),
				takeLatest(SEND_EMAIL, sendEmailSaga)
			])
		);
	});

	it('should dispatch fetchEmailsSuccess action when fetcEmailsSaga is called', () => {
		const gen = fetcEmailsSaga({ folder: 'inbox', pageNumber: 1, emailsPerPage: 20 });
		expect(gen.next().value).toEqual(
			call(fetch, {
				url: `${URL.EMAILS['inbox'.toUpperCase()]}?to=dummy@email.com&_sort=timestamp&_order=desc&_page=1&_limit=20`,
				headers: { AUTHORIZATION: `Bearer dummyAccessToken` },
				method: 'get'
			})
		);
		expect(gen.next({ response: 'dummyResponse' }).value).toEqual(put(fetchEmailsSuccess('inbox', 'dummyResponse')));
	});

	it('should dispatch fetchInboxDetails and fetchEmails action when deleteEmailsSaga is called', () => {
		const gen = deleteEmailsSaga({ folder: 'inbox', emails: [1], pageNumber: 1, emailsPerPage: 20 });
		expect(gen.next().value).toEqual(
			call(fetch, {
				url: `${URL.EMAILS['inbox'.toUpperCase()]}/1`,
				headers: { AUTHORIZATION: `Bearer dummyAccessToken` },
				method: 'delete'
			})
		);
		expect(gen.next().value).toEqual(put(fetchInboxDetails()));
		expect(gen.next().value).toEqual(put(fetchEmails('inbox', 1, 20)));
	});

	it('should dispatch fetchInboxDetails and fetchEmails action when readEmailSaga is called', () => {
		const gen = readEmailSaga({ folder: 'inbox', emails: [1], pageNumber: 1, emailsPerPage: 20 });
		expect(gen.next().value).toEqual(
			call(fetch, {
				url: `${URL.EMAILS[`${'inbox'.toUpperCase()}_READ`]}/1`,
				headers: { AUTHORIZATION: `Bearer dummyAccessToken` },
				method: 'put'
			})
		);
		expect(gen.next().value).toEqual(put(fetchInboxDetails()));
		expect(gen.next().value).toEqual(put(fetchEmails('inbox', 1, 20)));
	});

	it('should dispatch fetchInboxDetails and fetchEmails action when sendEmailSaga is called', () => {
		const gen = sendEmailSaga({ emailDetails: { name: 'dummyEmail' }, folder: 'inbox', pageNumber: 1, emailsPerPage: 20 });
		expect(gen.next().value).toEqual(
			call(fetch, {
				url: `${URL.EMAILS['inbox'.toUpperCase()]}`,
				headers: { AUTHORIZATION: `Bearer dummyAccessToken` },
				method: 'post',
				data: { name: 'dummyEmail' }
			})
		);
		expect(gen.next().value).toEqual(put(fetchInboxDetails()));
		expect(gen.next().value).toEqual(put(fetchEmails('inbox', 1, 20)));
	});
});