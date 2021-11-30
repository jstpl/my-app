
export default class BaseCrudReducer {

    #_prefix;
    #_initialState = {};

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
            case this.actionName('all'):
                return Object.assign({}, state, {dataProvider: action.dataProvider});
            default:
                return state;
        }
    }
}
