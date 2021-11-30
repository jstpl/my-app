import _ from 'lodash';

let _data = {};

export default class BaseContainer {

    set(path, value) {
        _.set(_data, path, value);
    }

    get(path, defaultValue) {
        return _.get(_data, path, defaultValue);
    }

    load(config) {
        _data = config;
    }

    all() {
        return _data;
    }
}
