
export default class DataProvider {

    #_collection = [];
    #_paginator = {};
    #_query = {};

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

    get query() {
        return this.#_query;
    }

    set query(value) {
        this.#_query = value;
    }
}
