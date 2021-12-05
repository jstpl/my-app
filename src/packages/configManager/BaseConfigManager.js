import _ from 'lodash';

export default class BaseConfigManager {

    #_data = {};

    set(path, value) {
        _.set(this.#_data, path, value);
    }

    get(path, defaultValue) {
        return _.get(this.#_data, path, defaultValue);
    }

    load(config) {
        this.#_data = config;
    }

    all() {
        return this.#_data;
    }
}
