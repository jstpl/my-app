import _ from 'lodash';

let PermanentStorage = {

    get: function (key, defaultValue) {
        var data = null;
        var dataJson = localStorage.getItem(key);
        if (!_.isEmpty(dataJson)) {
            data = JSON.parse(dataJson);
        }
        data = _.defaultTo(data, defaultValue);
        return data;
    },

    set: function (key, data) {
        var dataJson = JSON.stringify(data);
        localStorage.setItem(key, dataJson);
    },

    remove: function (key) {
        localStorage.removeItem(key);
    },

};

export default PermanentStorage;
