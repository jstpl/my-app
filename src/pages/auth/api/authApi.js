// import axios from 'axios';
import store from '../../../app/store';
// import config from '../../../app/config'
import * as authAction from '../actions/authActions';
import RpcClient from '../../../app/components/RpcClient.js';
// import React from "react";
// import {Route} from "react-router";





class AuthRepository {
    auth(body) {
        /*const body = {
            login: 'admin',
            password: 'Wwwqqq111',
        };*/
        const promise = RpcClient.send('authentication.getTokenByPassword', body);

        promise.then(function (responseEntity) {
            console.log(responseEntity);
        });
    }
}


/**
 * Delete a user
 */
export function authorization(form) {
    let authRepository = new AuthRepository();



    authRepository.auth(form);

    console.log(form);
    let response = {
        id: 1234,
        name: 'Jasy'
    };
    store.dispatch(authAction.authorizationSuccess(response));

    /*return axios.post(config.apiUrl + '/auth.json')
        .then(response => {
            store.dispatch(authAction.deleteUserSuccess(form));
            return response;
        });*/
}
