import CrudReducer from "../reducers/CrudReducer";
import DataProvider from "../DataProvider";
import CrudDispatcher from "../reducers/CrudDispatcher";

export default class BaseService {

    #_reducer = null;
    #_reducerPrefix = null;
    #_reducerDispatcher = null;

    get reducer() {
        if (!this.#_reducer) {
            this.#_reducer = this._createReducerInstance();
        }
        return this.#_reducer;
    }

    set reducer(value) {
        this.#_reducer = value;
    }

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

    /*reducerAction(name) {
        return this.reducerPrefix + name;
    }*/

    _createReducerInstance() {
        let chatReducerInstance = new CrudReducer();
        chatReducerInstance.prefix = this.reducerPrefix;
        chatReducerInstance.initialState = {
            dataProvider: new DataProvider(),
        };
        return chatReducerInstance;
    }
}
