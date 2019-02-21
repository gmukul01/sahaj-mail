import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_USER_DETAILS } from 'constants/actionTypes';
import { fetchUserDetailsSuccess } from 'actions/user';
import fetch from 'util/fetch';
import * as URL from 'constants/urls';
import userSaga, { fetchUserDetails } from 'sagas/user';

describe('User saga', () => {
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

	it('should dispatch fetchUserDetailsSuccess action', () => {
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
});
