import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import user from 'reducers/user';
import { loadState, saveState } from 'util/localStorage';

const preloadedState = loadState();

export const sagaMiddleware = createSagaMiddleware();
export const store = createStore(combineReducers({ user }), preloadedState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

store.subscribe(() => {
	saveState({
		user: store.getState().user
	});
});
