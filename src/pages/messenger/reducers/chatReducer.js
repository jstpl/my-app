// import * as userActionEnum from '../enums/userActionEnum';
// import _ from 'lodash';

import DataProvider from "../../../packages/domain/DataProvider";

const initialState = {
    dataProvider: new DataProvider(),
    // userProfile: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'GET_COLLECTION_SUCCESS':
            return Object.assign({}, state, {dataProvider: action.dataProvider});
        default:
            return state;
    }
};
