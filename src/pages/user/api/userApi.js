import axios from 'axios';
import store from '../../../app/config/store';
import * as userAction from '../actions/userActions';
import configManager from "../../../packages/configManager/configManager";

/**
 * Get all users
 */
export function getUsers() {
    let apiUrl = configManager.get('apiUrl');
    return axios.get(apiUrl + '/users.json')
        .then(response => {
            store.dispatch(userAction.getUsersSuccess(response.data));
            return response;
        });
}

/**
 * Search users
 */
export function searchUsers(query = '') {
    let apiUrl = configManager.get('apiUrl');
    return axios.get(apiUrl + '/users?q=' + query)
        .then(response => {
            store.dispatch(userAction.getUsersSuccess(response.data));
            return response;
        });
}

/**
 * Delete a user
 */
export function deleteUser(user) {
    let apiUrl = configManager.get('apiUrl');
    return axios.get(apiUrl + '/users/' + user.id + '.json')
        .then(response => {
            let user = response.data;
            store.dispatch(userAction.deleteUserSuccess(user));
        });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */
export function getProfile(userId) {
    store.dispatch(userAction.userProfileSuccess({}));
    let apiUrl = configManager.get('apiUrl');
    return axios.get(apiUrl + '/users/' + userId + '.json')
        .then(response => {
            let user = response.data;
            store.dispatch(userAction.userProfileSuccess(user));
        });
}
