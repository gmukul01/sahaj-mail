import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_INBOX_DETAILS } from 'constants/actionTypes';
import { fetchInboxDetailsSuccess } from 'actions/inbox';
import fetch from 'util/fetch';
import { saveState } from 'util/localStorage';
import * as URL from 'constants/urls';
import inboxSaga, { fetcinboxDetails } from 'sagas/inbox';

describe('User saga', () => {
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

	it('should listen FETCH_INBOX_DETAILS', () => {
		const gen = inboxSaga();
		expect(gen.next().value).toEqual(takeLatest(FETCH_INBOX_DETAILS, fetcinboxDetails));
	});

	it('should dispatch fetchInboxDetailsSuccess action when fetcinboxDetails saga is called', () => {
		const gen = fetcinboxDetails();
		expect(gen.next().value).toEqual(
			call(fetch, {
				url: `${URL.INBOX_DETAILS}`,
				headers: { AUTHORIZATION: 'Bearer dummyAccessToken' },
				method: 'get'
			})
		);
		expect(gen.next({ response: [{ email: 'dummyEmail', totalEmails: 1 }] }).value).toEqual(put(fetchInboxDetailsSuccess({ totalEmails: 1 })));
	});
});
