import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import user from 'reducers/user';
import inbox from 'reducers/inbox';
import sent from 'reducers/sent';
import { loadState, saveState } from 'util/localStorage';

const preloadedState = loadState();

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(combineReducers({ user, inbox, sent }), preloadedState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

store.subscribe(() => {
	saveState({
		user: store.getState().user
	});
});
