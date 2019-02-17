import { all } from 'redux-saga/effects';
import userSaga from 'sagas/user';
import inboxSaga from 'sagas/inbox';

export default function* rootSaga() {
	yield all([userSaga(), inboxSaga()]);
}
