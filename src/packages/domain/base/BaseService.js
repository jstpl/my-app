// import CrudDispatcher from "../reducers/CrudDispatcher";

export default class BaseService {

    //#_reducerPrefix = null;
    #_storeDispatcher = null;

    constructor(storeDispatcher = null) {
        this.#_storeDispatcher = storeDispatcher;
    }

    /*set reducerPrefix(value) {
        this.#_reducerPrefix = value;
    }

    get reducerPrefix() {
        let prefix;
        if (this.#_reducerPrefix == null) {
            prefix = this.storeDispatcher.reducerPrefix;
        } else {
            prefix = this.#_reducerPrefix;
        }
        return prefix;
    }*/

    get storeDispatcher() {
        /*if (!this.#_storeDispatcher) {
            this.#_storeDispatcher = new CrudDispatcher();
            this.#_storeDispatcher.reducerPrefix = this.reducerPrefix;
        }*/
        return this.#_storeDispatcher;
    }

    /*set storeDispatcher(value) {
        this.#_storeDispatcher = value;
    }*/
}
