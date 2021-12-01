import container from "../../../container/container";
import crudAction from "../../enums/crudAction";
import CrudReducer from "../../reducers/CrudReducer";
import domain from "../../../../app/config/domain";

export default class BaseStateRepository {

    #_reducerPrefix = null;
    #_reducer = null;
    #_initialState = {};

    constructor(reducerPrefix = null) {
        if(reducerPrefix) {
            this.#_reducerPrefix = reducerPrefix;
        }
    }

    get initialState() {
        return this.#_initialState;
    }

    set initialState(value) {
        this.#_initialState = value;
    }

    get reducerPrefix() {
        return this.#_reducerPrefix;
    }

    get reducer() {
        if(this.#_reducer === null) {
            this.#_reducer = new CrudReducer(this.reducerPrefix);
            this.#_reducer.initialState = this.initialState;
        }
        return this.#_reducer;
    }

    set reducer(value) {
        this.#_reducer = value;
    }

    get state() {
        return this.reducer.getState();
    }

    get store() {
        return domain.app.store;
        // return container.get('store');
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
