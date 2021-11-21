import * as authActionEnum from '../enums/authActionEnum';

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
            return state;
    }
};
