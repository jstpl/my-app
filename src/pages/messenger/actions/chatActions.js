import * as userActionEnum from '../enums/userActionEnum';

export function getUsersSuccess(users) {
    return {
        type: userActionEnum.GET_USERS_SUCCESS,
        users
    };
}

export function deleteUserSuccess(userProfile) {
    return {
        type: userActionEnum.DELETE_USER_SUCCESS,
        userProfile
    };
}

export function userProfileSuccess(userProfile) {
    return {
        type: userActionEnum.USER_PROFILE_SUCCESS,
        userProfile
    };
}
