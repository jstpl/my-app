import * as userActionEnum from '../../auth/enums/authActionEnum';

export function getUsersSuccess(users) {
    return {
        type: userActionEnum.GET_USERS_SUCCESS,
        users
    };
}

export function authorizationSuccess(identity) {
    return {
        type: userActionEnum.AUTHORIZATION,
        identity
    };
}

export function userProfileSuccess(userProfile) {
    return {
        type: userActionEnum.USER_PROFILE_SUCCESS,
        userProfile
    };
}
