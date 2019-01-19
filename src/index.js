import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux-immutable';

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// axios.interceptors.request.use(request => {
//     request.headers = {};
//     return request;
// })

// axios.defaults.headers.common['Authorization'] = 'AUTH';

const rootReducer = combineReducers({
    coun: counterReducer,
    res: resultReducer,
})

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}>
    <BrowserRouter><App /></BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
