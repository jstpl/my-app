// import * as userActionEnum from '../enums/userActionEnum';
// import _ from 'lodash';

import DataProvider from "../../../packages/domain/DataProvider";
import crudAction from "../../../packages/domain/enums/crudAction";

const initialState = {
    dataProvider: new DataProvider(),
    // userProfile: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case crudAction.ALL:
            return Object.assign({}, state, {dataProvider: action.dataProvider});
        default:
            return state;
    }
};
