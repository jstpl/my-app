import BaseTokenEntity from "./BaseTokenEntity";
import _ from 'lodash';

export default class TokenEntity extends BaseTokenEntity {

    #_isAuthenticated = null;
    #_value = null;
    ddd;

    constructor(value = null) {
        super();
        this.value = value;
    }

    get isAuthenticated() {
        if(this.#_isAuthenticated === null) {
            return !_.isEmpty(this.#_value);
        }
        return this.#_isAuthenticated;
    }

    set isAuthenticated(value) {
        this.#_isAuthenticated = value;
    }

    get value() {
        return this.#_value;
    }

    set value(value) {
        this.#_value = value;
    }
}