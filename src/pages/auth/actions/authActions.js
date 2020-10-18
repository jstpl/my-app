import * as userActionEnum from '../../auth/enums/authActionEnum';

export function authorizationSuccess(identity) {
    return {
        type: userActionEnum.AUTHORIZATION,
        identity
    };
}
