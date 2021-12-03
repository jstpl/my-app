import BaseTokenEntity from "./BaseTokenEntity";
import _ from 'lodash';

export default class TokenEntity extends BaseTokenEntity {

    #_isAuthenticated = null;
    #_value = null;
    #_identity = null;

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

    get identity() {
        return this.#_identity;
    }

    set identity(value) {
        this.#_identity = value;
    }
}