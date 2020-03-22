import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createBrowserHistory } from 'history'
import { Router, Route, Switch} from 'react-router-dom';

import Home from '../src/views/home/Home';
import Coba from '../src/views/Coba'

var hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/coba" component={Coba} />
            <Route path="" component={Home} />
        </Switch>
    </Router>,
    document.getElementById('root')
)

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
