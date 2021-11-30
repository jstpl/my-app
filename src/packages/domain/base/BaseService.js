import CrudReducer from "../reducers/CrudReducer";
import DataProvider from "../DataProvider";

export default class BaseService {

    #_reducer = null;
    #_prefix = null;

    set prefix(value) {
        this.#_prefix = value;
    }

    get prefix() {
        let prefix;
        if(this.#_prefix == null) {
            prefix = this.reducer.prefix;
        } else {
            prefix = this.#_prefix;
        }
        return prefix;
    }

    get reducer() {
        if (!this.#_reducer) {
            this.#_reducer = this._createReducerInstance();
        }
        return this.#_reducer;
    }

    set reducer(value) {
        this.#_reducer = value;
    }

    _createReducerInstance() {
        let chatReducerInstance = new CrudReducer();
        chatReducerInstance.prefix = this.prefix;
        chatReducerInstance.initialState = {
            dataProvider: new DataProvider(),
        };
        return chatReducerInstance;
    }
}
