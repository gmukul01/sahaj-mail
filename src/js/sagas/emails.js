import { all, call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_EMAILS, DELETE_EMAILS, READ_EMAILS } from 'constants/actionTypes';
import { fetchEmailsSuccess, fetchEmailsError, fetchEmails } from 'actions/emails';
import { loadState } from 'util/localStorage';
import fetch from 'util/fetch';
import * as URL from 'constants/urls';

export function* fetcEmailsSaga({ folder, pageNumber, emailsPerPage }) {
	const {
		user: { accessToken, email }
	} = loadState();
	const { response, error } = yield call(fetch, {
		url: `${URL.EMAILS[folder.toUpperCase()]}?to=${email}&_page=${pageNumber}&_limit=${emailsPerPage}`,
		headers: { AUTHORIZATION: `Bearer ${accessToken}` },
		method: 'get'
	});
	if (response) yield put(fetchEmailsSuccess(folder, response));
	if (error) yield put(fetchEmailsError(folder, error.message));
}

export function* deleteEmailsSaga({ folder, emails, pageNumber, emailsPerPage }) {
	const {
		user: { accessToken }
	} = loadState();
	for (let id of emails) {
		yield call(fetch, {
			url: `${URL.EMAILS[folder.toUpperCase()]}/${id}`,
			headers: { AUTHORIZATION: `Bearer ${accessToken}` },
			method: 'delete'
		});
	}

	yield put(fetchEmails(folder, pageNumber, emailsPerPage));
}

export function* readEmailSaga({ folder, emails, pageNumber, emailsPerPage }) {
	const {
		user: { accessToken }
	} = loadState();

	for (let emailData of emails) {
		yield call(fetch, {
			url: `${URL.EMAILS[folder.toUpperCase()]}/${emailData.id}`,
			headers: { AUTHORIZATION: `Bearer ${accessToken}` },
			method: 'put',
			data: emailData
		});
	}

	yield put(fetchEmails(folder, pageNumber, emailsPerPage));
}

export default function* inboxSaga() {
	yield all([takeLatest(FETCH_EMAILS, fetcEmailsSaga), takeLatest(DELETE_EMAILS, deleteEmailsSaga), takeLatest(READ_EMAILS, readEmailSaga)]);
}
