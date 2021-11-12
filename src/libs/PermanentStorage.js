import _ from 'lodash';

class PermanentStorage {

    get(key, defaultValue) {
        var data = null;
        var dataJson = localStorage.getItem(key);
        if (!_.isEmpty(dataJson)) {
            data = JSON.parse(dataJson);
        }
        data = _.defaultTo(data, defaultValue);
        return data;
    }

    set(key, data) {
        var dataJson = JSON.stringify(data);
        localStorage.setItem(key, dataJson);
    }

    remove(key) {
        localStorage.removeItem(key);
    }
}

export default PermanentStorage;
