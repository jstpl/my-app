import CrudDispatcher from "../reducers/CrudDispatcher";

export default class BaseService {

    #_reducerPrefix = null;
    #_reducerDispatcher = null;

    constructor() {
    }

    set reducerPrefix(value) {
        this.#_reducerPrefix = value;
    }

    get reducerPrefix() {
        let prefix;
        if (this.#_reducerPrefix == null) {
            prefix = this.reducerDispatcher.reducerPrefix;
        } else {
            prefix = this.#_reducerPrefix;
        }
        return prefix;
    }

    get reducerDispatcher() {
        if (!this.#_reducerDispatcher) {
            this.#_reducerDispatcher = new CrudDispatcher();
            this.#_reducerDispatcher.reducerPrefix = this.reducerPrefix;
        }
        return this.#_reducerDispatcher;
    }

    set reducerDispatcher(value) {
        this.#_reducerDispatcher = value;
    }
}
