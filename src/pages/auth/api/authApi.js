// import axios from 'axios';
import store from '../../../app/store';
// import config from '../../../app/config'
import * as authAction from '../actions/authActions';

/**
 * Delete a user
 */
export function authorization(form) {
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
