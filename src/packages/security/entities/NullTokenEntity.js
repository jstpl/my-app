import BaseTokenEntity from "./BaseTokenEntity";

export default class NullTokenEntity extends BaseTokenEntity {

    constructor(value = null) {
        super();
        this.value = value;
    }

    get isAuthenticated() {
        return false;
    }

    set isAuthenticated(value) {

    }

    get value() {
        return null;
    }

    set value(value) {

    }
}