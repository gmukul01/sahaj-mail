import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_USER_DETAILS } from 'constants/actionTypes';
import { fetchUserDetailsSuccess, fetchUserDetailsFailure } from 'actions/user';
import fetch from 'util/fetch';
import * as URL from 'constants/urls';

export function* fetchUserDetails({ email, password }) {
	const { response, error } = yield call(fetch, {
		url: URL.USER_DETAILS,
		method: 'post',
		data: { email, password }
	});

	if (response) yield put(fetchUserDetailsSuccess(response));
	if (error) yield put(fetchUserDetailsFailure(error.message));
}

export default function* userSaga() {
	yield takeLatest(FETCH_USER_DETAILS, fetchUserDetails);
}
