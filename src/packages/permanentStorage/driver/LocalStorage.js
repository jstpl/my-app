import _ from 'lodash';
import StorageInterface from "../interfaces/StorageInterface";

export default class LocalStorage extends StorageInterface {

    get(key, defaultValue) {
        let data = null;
        let dataJson = localStorage.getItem(key);
        if (!_.isEmpty(dataJson)) {
            data = JSON.parse(dataJson);
        }
        data = _.defaultTo(data, defaultValue);
        return data;
    }

    set(key, data) {
        let dataJson = JSON.stringify(data);
        localStorage.setItem(key, dataJson);
    }

    remove(key) {
        localStorage.removeItem(key);
    }
}
