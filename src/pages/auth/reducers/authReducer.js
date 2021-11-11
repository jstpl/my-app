import * as authActionEnum from '../enums/authActionEnum';
// import _ from 'lodash';

const initialState = {
    identity: {},
    form: {
        login: '',
    },
    users: [],
    userProfile: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case authActionEnum.AUTHORIZATION:
            return Object.assign({}, state, {identity: action.identity});
        default:
            return Object.assign({}, state, {identity: null});
    }
    return state;
};
