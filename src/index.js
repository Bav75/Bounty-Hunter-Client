import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout } from './components/Layout';


// initialize redux store 
const store = createStore(rootReducer, applyMiddleware(thunk));

// set base URL 
export const BASE_URL = 'http://localhost:3002/';

ReactDOM.render(
    <Provider store={store}>
        <Layout>
            <Router>
                <App />
            </Router>
        </Layout>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
