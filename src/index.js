import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './index.css';
import App from './components/App/App';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
//import logger from './middlewares/logger';
import error from './middlewares/error'
import logger from 'redux-logger';


const history = createBrowserHistory();

const store = createStore(
    reducer, applyMiddleware(logger, error)

);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

