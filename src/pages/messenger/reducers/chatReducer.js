// import * as userActionEnum from '../enums/userActionEnum';
// import _ from 'lodash';

import DataProvider from "../../../packages/domain/DataProvider";
import crudAction from "../../../packages/domain/enums/crudAction";

const initialState = {
    dataProvider: new DataProvider(),
    // userProfile: {}
};

class Reducer {

    #_prefix;

    set prefix(value) {
        this.#_prefix = value;
    }

    get prefix() {
        return this.#_prefix;
    }

    actionName(name) {
        // console.log(this.prefix + name);
        return this.prefix + name;
    }

    run(state = initialState, action) {
        switch (action.type) {
            case this.actionName('all'):
                return Object.assign({}, state, {dataProvider: action.dataProvider});
            default:
                return state;
        }
    }
}

let reducer = new Reducer();
reducer.prefix = 'messengerChat';

export default reducer.run.bind(reducer);
