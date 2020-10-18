import * as userActionEnum from '../../user/enums/userActionEnum';

export function getUsersSuccess(users) {
    return {
        type: userActionEnum.GET_USERS_SUCCESS,
        users
    };
}

export function deleteUserSuccess(form) {
    return {
        type: userActionEnum.DELETE_USER_SUCCESS,
        form
    };
}

export function userProfileSuccess(userProfile) {
    return {
        type: userActionEnum.USER_PROFILE_SUCCESS,
        userProfile
    };
}
