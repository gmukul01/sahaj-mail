import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import { sagaMiddleware, store } from 'reducers';
import rootSaga from 'sagas';
import Routes from 'routes/Routes';
import history from 'util/history';
import 'assets/stylesheets/main.scss';

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Routes />
		</Router>
	</Provider>,
	document.getElementById('root')
);
module.hot.accept();
