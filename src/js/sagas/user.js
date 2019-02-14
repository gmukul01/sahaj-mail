import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_USER_DETAILS } from 'constants/actionTypes';
import { fetchUserDetailsSuccess } from 'actions/user';
import fetch from 'util/fetch';
import * as URL from 'constants/urls';

export function* fetchUserDetails({ email, password }) {
	const { response } = yield call(fetch, {
		url: URL.USER_DETAILS,
		method: 'post',
		data: { email, password }
	});
	if (response) {
		const user = response.data;
		yield put(fetchUserDetailsSuccess(user));
	}
}

export default function* userSaga() {
	yield takeLatest(FETCH_USER_DETAILS, fetchUserDetails);
}
