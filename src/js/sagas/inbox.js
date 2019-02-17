import { all, call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_INBOX_DETAILS, FETCH_INBOX_EMAILS } from 'constants/actionTypes';
import { fetchInboxDetailsSuccess, fetchInboxEmailsSuccess, fetchInboxDetailsError } from 'actions/inbox';
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

export function* fetcInboxEmails({ pageNumber, emailsPerPage }) {
	const {
		user: { accessToken, email }
	} = loadState();
	const { response, error } = yield call(fetch, {
		url: `${URL.INBOX_EMAILS}?to=${email}&_page=${pageNumber}&_limit=${emailsPerPage}`,
		headers: { AUTHORIZATION: `Bearer ${accessToken}` },
		method: 'get'
	});

	if (response) yield put(fetchInboxEmailsSuccess(response));
	if (error) yield put(fetchInboxDetailsError(error.message));
}

export default function* inboxSaga() {
	yield all([takeLatest(FETCH_INBOX_DETAILS, fetcinboxDetails), takeLatest(FETCH_INBOX_EMAILS, fetcInboxEmails)]);
}
