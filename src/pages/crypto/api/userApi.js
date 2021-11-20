import axios from 'axios';
import store from '../../../app/config/store';
// import * as userAction from '../actions/userActions';
import configManager from "../../../app/singletons/configManager";

import { gostCrypto, gostEngine } from 'node-gost-crypto';

/**
 * Get all users
 */
export function getUsers() {


    // const str = 'тест';

    let varUrl = configManager.get('varUrl');

    axios.get(varUrl + '/dataAndSignature.xml').then(function (xmlAndSignature) {

    });

    axios.get(varUrl + '/data.xml').then(function (str) {

        str = str.data;
        console.log(str);

// $ echo -en '\xD1\x82\xD0\xB5\xD1\x81\xD1\x82' | openssl dgst -md_gost94
// 048fcd8d361b7a039bdc3b1906d8128fd3bfd968047ea2b7e930159357388269

        const buffer = Buffer.from(str);


        const dataToHash = gostCrypto.coding.Chars.decode(str, 'utf8');
        //console.log(dataToHash);
        // const hashBytes = await gostCrypto.subtle.digest({name: 'GOST R 34.11-94', version: 1994, sBox: 'D-TEST'}, dataToHash);
        // this.signedDataXMLHash = gostCrypto.coding.Base64.encode(hashBytes);
        gostCrypto.subtle.digest({name: 'GOST R 34.11-94', version: 1994, sBox: 'D-TEST'}, dataToHash).then((arrayBuffer) => {
            console.log(Buffer.from(arrayBuffer).toString('base64'));
        });





// using engine
        const digest = gostEngine.getGostDigest({name: 'GOST R 34.11', length: 256, version: 1994});
        console.log(Buffer.from(digest.digest(buffer)).toString('base64'));

        //gostCrypto.subtle.generateKey()

// using crypto
        gostCrypto.subtle.digest('GOST R 34.11-94-256', buffer).then((arrayBuffer) => {
            console.log(Buffer.from(arrayBuffer).toString('hex'));
        });
    });



    let apiUrl = configManager.get('apiUrl');
    return axios.get(apiUrl + '/users.json')
        .then(response => {
            //store.dispatch(userAction.getUsersSuccess(response.data));
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
            //store.dispatch(userAction.getUsersSuccess(response.data));
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
            //store.dispatch(userAction.deleteUserSuccess(user));
        });
}

/**
 * getProfile() is much more complex because it has to make
 * three XHR requests to get all the profile info.
 */
export function getProfile(userId) {
    //store.dispatch(userAction.userProfileSuccess({}));
    let apiUrl = configManager.get('apiUrl');
    return axios.get(apiUrl + '/users/' + userId + '.json')
        .then(response => {
            let user = response.data;
           // store.dispatch(userAction.userProfileSuccess(user));
        });
}
