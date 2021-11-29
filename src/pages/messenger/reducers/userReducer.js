import * as userActionEnum from '../enums/userActionEnum';
import _ from 'lodash';

const initialState = {
    users: [],
    userProfile: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case userActionEnum.GET_USERS_SUCCESS:
            return Object.assign({}, state, {users: action.users});
        case userActionEnum.DELETE_USER_SUCCESS:
            // Use lodash to create a new user array without the user we want to remove
            const newUsers = _.filter(state.users, user => user.id !== action.userProfile.id);
            return Object.assign({}, state, {users: newUsers});
        case userActionEnum.USER_PROFILE_SUCCESS:
            return Object.assign({}, state, {userProfile: action.userProfile});
        default:
            return state;
    }
};
