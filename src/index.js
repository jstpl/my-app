import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './app/config/store';
import router from './app/config/router';
import event from './app/config/event';
import configManager from "./app/singletons/configManager";
import config from "./app/config/config";

configManager.load(config);
event.init();

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
