import _ from 'lodash';

export default class BaseContainer {

    set(path, value) {
        _.set(this, path, value);
    }

    get(path, defaultValue) {
        return _.get(this, path, defaultValue);
    }

    load(config) {
        Object.assign(this, config);
    }

    /*all() {
        return this;
    }*/
}
