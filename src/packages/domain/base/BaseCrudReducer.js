import crudAction from "../enums/crudAction";

export default class BaseCrudReducer {

    #_prefix;
    #_initialState = {};

    /*constructor(prefix = null) {
        this.#_prefix = prefix;
    }*/

    set prefix(value) {
        this.#_prefix = value;
    }

    get prefix() {
        return this.#_prefix;
    }

    set initialState(value) {
        this.#_initialState = value;
    }

    actionName(name) {
        return this.prefix + name;
    }

    run(state = this.#_initialState, action) {
        switch (action.type) {
            case this.actionName(crudAction.ALL):
                return Object.assign({}, state, {dataProvider: action.dataProvider});
            default:
                return state;
        }
    }

    getState() {
        return this.run.bind(this);
    }
}
