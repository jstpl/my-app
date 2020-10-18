import * as authActionEnum from '../enums/authActionEnum';
import _ from 'lodash';

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
        case authActionEnum.GET_USERS_SUCCESS:
            return Object.assign({}, state, {users: action.users});
        case authActionEnum.AUTHORIZATION:
            return Object.assign({}, state, {identity: action.identity});
            // Use lodash to create a new user array without the user we want to remove
            //const newUsers = _.filter(state.users, user => user.id != action.userId);
            //return Object.assign({}, state, {users: newUsers});
        case authActionEnum.USER_PROFILE_SUCCESS:
            return Object.assign({}, state, {userProfile: action.userProfile});
    }
    return state;
};
