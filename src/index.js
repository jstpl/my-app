import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './app/config/store';
import router from './app/config/router';
import domain from "./app/config/domain";
import "./app/config/bootstrap";

domain.app.store = store;

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
