
export default class BaseDispatcher {

    #_reducerPrefix = null;

    set reducerPrefix(value) {
        this.#_reducerPrefix = value;
    }

    get reducerPrefix() {
        let prefix;
        if (this.#_reducerPrefix == null) {
            prefix = this.reducer.prefix;
        } else {
            prefix = this.#_reducerPrefix;
        }
        return prefix;
    }

    reducerAction(name) {
        return this.reducerPrefix + name;
    }
}
