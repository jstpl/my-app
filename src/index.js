import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './app/config/store';
import router from './app/config/router';
import "./app/config/bootstrap";
import container from "./app/config/container";
import configManager from "./packages/configManager/configManager";

container.app.store = store;

container.security.services.userProvider.init();

container.rpc.repositories.api.transport.rpcUrl = configManager.get('rpcUrl');

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
