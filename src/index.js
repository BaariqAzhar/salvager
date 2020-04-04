import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createBrowserHistory } from 'history'
import { Router, Route, Switch } from 'react-router-dom';

import Home from '../src/views/home/Home';
import Products from '../src/views/products/Products';
import ProductDetail from '../src/views/products/ProductDetail';
import Diary from '../src/views/diary/Diary';
import Contact from '../src/views/contact/Contact';
import Story from '../src/views/story/Story';
import Coba from '../src/views/Coba'

var hist = createBrowserHistory();
ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/coba" component={Coba} />
            <Route path="/products" component={Products} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/diary" component={Diary} />
            <Route path="/contact" component={Contact} />
            <Route path="/story" component={Story} />
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
