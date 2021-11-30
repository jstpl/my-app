
export default class DataProvider {

    #_collection = [];
    #_paginator = {};

    get collection() {
        return this.#_collection;
    }

    set collection(value) {
        this.#_collection = value;
    }

    get paginator() {
        return this.#_paginator;
    }

    set paginator(value) {
        this.#_paginator = value;
    }
}