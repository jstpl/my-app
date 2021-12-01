import container from "../../../container/container";
import crudAction from "../../enums/crudAction";

export default class BaseStateRepository {

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

    setValue(action) {
        action.type = crudAction.SET;
        this.dispatch(action);
    }

    dispatch(action) {
        action.type = this.reducerAction(action.type);
        this.store.dispatch(action);
    }

    reducerAction(name) {
        return this.reducerPrefix + name;
    }
}
