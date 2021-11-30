import configManager from "../../configManager/configManager";

export default class BaseDispatcher {

    #_reducerPrefix = null;

    constructor(reducerPrefix) {
        this.#_reducerPrefix = reducerPrefix;
    }

    set reducerPrefix(value) {
        this.#_reducerPrefix = value;
    }

    get reducerPrefix() {
        /*let prefix;
        if (this.#_reducerPrefix == null) {
            prefix = this.reducer.prefix;
        } else {
            prefix = this.#_reducerPrefix;
        }*/
        return this.#_reducerPrefix;
    }

    get store() {
        return configManager.get('store');
    }

    /*dispatch(action) {
        this.store.dispatch(action);
    }*/

    reducerAction(name) {
        return this.reducerPrefix + name;
    }
}
