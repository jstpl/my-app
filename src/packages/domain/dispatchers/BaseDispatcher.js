import container from "../../container/container";

export default class BaseDispatcher {

    #_reducerPrefix = null;

    constructor(reducerPrefix) {
        this.#_reducerPrefix = reducerPrefix;
    }

    get reducerPrefix() {
        return this.#_reducerPrefix;
    }

    get store() {
        return container.get('store');
    }

    dispatch(action) {
        action.type = this.reducerAction(action.type);
        this.store.dispatch(action);
    }

    reducerAction(name) {
        return this.reducerPrefix + name;
    }
}
