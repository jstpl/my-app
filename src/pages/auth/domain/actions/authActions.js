import * as userActionEnum from '../enums/authActionEnum';

export function authorizationSuccess(identity) {
    return {
        type: userActionEnum.AUTHORIZATION,
        identity
    };
}
