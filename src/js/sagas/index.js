import { all } from 'redux-saga/effects';
import userSaga from 'sagas/user';
import inboxSaga from 'sagas/inbox';
import emailSaga from 'sagas/email';

export default function* rootSaga() {
	yield all([userSaga(), inboxSaga(), emailSaga()]);
}
