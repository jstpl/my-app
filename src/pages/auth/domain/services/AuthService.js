import eventEmitter from '../../../../packages/event/eventEmitter';
import authEventEnum from "../enums/authEventEnum";
import container from "../../../../app/config/container";
import TokenEntity from "../../../../packages/security/entities/TokenEntity";

export default class AuthService {

    constructor(authRpcRepository) {
        this.authRpcRepository = authRpcRepository;
    }

    async authByForm(form) {
        try {
            let tokenEntityValue = await this.authRpcRepository.getTokenByForm(form);

            let tokenEntity = new TokenEntity(tokenEntityValue.token);
            tokenEntity.identity = tokenEntityValue.identity;
            container.security.services.userProvider.login(tokenEntity);
            eventEmitter.emit(authEventEnum.LOGIN, tokenEntity);
            /*let identityEntity = {
                id: 1234,
                name: 'Jasy'
            };*/

            return tokenEntity;
        } catch (error) {
            throw error;
        }
    }

    logout() {
        container.security.services.userProvider.logout();
        eventEmitter.emit(authEventEnum.LOGOUT);
    }
}
