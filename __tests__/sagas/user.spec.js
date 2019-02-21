import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_USER_DETAILS } from 'constants/actionTypes';
import { fetchUserDetailsSuccess, fetchUserDetailsFailure } from 'actions/user';
import fetch from 'util/fetch';
import * as URL from 'constants/urls';
import userSaga, { fetchUserDetails } from 'sagas/user';

describe('Inbox saga', () => {
	const response = {
			data: { user: { email: 'dummyUser' } }
		},
		data = {
			email: 'dummyemail',
			password: 'dummypassword'
		};

	it('should listen FETCH_USER_DETAILS', () => {
		const gen = userSaga();
		expect(gen.next().value).toEqual(takeLatest(FETCH_USER_DETAILS, fetchUserDetails));
	});

	it('should dispatch fetchUserDetailsSuccess action when fetchUserDetails is called', () => {
		const gen = fetchUserDetails(data);
		expect(gen.next().value).toEqual(
			call(fetch, {
				url: URL.USER_DETAILS,
				method: 'post',
				data
			})
		);
		expect(gen.next({ response }).value).toEqual(put(fetchUserDetailsSuccess(response)));
	});

	it('should dispatch fetchUserDetailsFailure action when fetchUserDetails saga throws error', () => {
		const gen = fetchUserDetails(data);
		expect(gen.next().value).toEqual(
			call(fetch, {
				url: URL.USER_DETAILS,
				method: 'post',
				data
			})
		);
		expect(gen.next({ error: { message: 'dummy error message' } }).value).toEqual(put(fetchUserDetailsFailure('dummy error message')));
	});
});
