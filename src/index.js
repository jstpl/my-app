import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './app/store';
import router from './app/router';

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
