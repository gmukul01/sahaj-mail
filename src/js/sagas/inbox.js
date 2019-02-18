import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_INBOX_DETAILS } from 'constants/actionTypes';
import { fetchInboxDetailsSuccess, fetchInboxDetailsError } from 'actions/inbox';
import { loadState } from 'util/localStorage';
import fetch from 'util/fetch';
import * as URL from 'constants/urls';

export function* fetcinboxDetails() {
	const {
		user: { accessToken, email }
	} = loadState();
	const { response, error } = yield call(fetch, {
		url: `${URL.INBOX_DETAILS}?email=${email}`,
		headers: { AUTHORIZATION: `Bearer ${accessToken}` },
		method: 'get'
	});

	if (response) {
		const { email, ...rest } = response[0];
		yield put(fetchInboxDetailsSuccess(rest));
	}
	if (error) yield put(fetchInboxDetailsError(error.message));
}

export default function* emailSaga() {
	yield takeLatest(FETCH_INBOX_DETAILS, fetcinboxDetails);
}
