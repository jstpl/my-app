import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './app/config/store';
import router from './app/config/router';
// import Bootstrap from "./app/config/bootstrap";
import "./app/config/bootstrap";

// (new Bootstrap()).init();

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
