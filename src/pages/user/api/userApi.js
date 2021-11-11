import axios from 'axios';
import store from '../../../app/store';
import config from '../../../app/config'
import * as userAction from '../actions/userActions';

/**
 * Get all users
 */
export function getUsers() {
    return axios.get(config.apiUrl + '/users.json')
        .then(response => {
            store.dispatch(userAction.getUsersSuccess(response.data));
            return response;
        });
}

/**
 * Search users
 */
export function searchUsers(query = '') {
    return axios.get(config.apiUrl + '/users?q=' + query)
        .then(response => {
            store.dispatch(userAction.getUsersSuccess(response.data));
            return response;
        });
}

/**
 * Delete a user
 */
export function deleteUser(form) {
    return axios.delete(config.apiUrl + '/auth')
        .then(response => {
            store.dispatch(userAction.deleteUserSuccess(form));
            return response;
        });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */
export function getProfile(userId) {
    store.dispatch(userAction.userProfileSuccess({}));

    return axios.get(config.apiUrl + '/users/' + userId + '.json')
        .then(response => {
            let user = response.data;
            store.dispatch(userAction.userProfileSuccess(user));
        });
}
