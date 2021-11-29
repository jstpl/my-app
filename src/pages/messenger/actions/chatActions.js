// import * as userActionEnum from '../enums/userActionEnum';

export function getCollectionSuccess(dataProvider) {
    return {
        type: 'GET_COLLECTION_SUCCESS',
        dataProvider
    };
}

/*export function deleteUserSuccess(userProfile) {
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
}*/
