import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from "react-router";
import { Provider } from "react-redux";
import { syncHistoryWithStore } from "react-router-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import routes from './routes';
import configureStore from './store/configureStore';
import initialState from './reducers/initialState';

const store = configureStore(initialState);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}  routes={routes}/>
    </Provider>,

    document.getElementById('root')
)
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
