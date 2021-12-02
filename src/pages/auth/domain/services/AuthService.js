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
            let token = await this.authRpcRepository.getTokenByForm(form);
            let tokenEntity = new TokenEntity(token);
            container.security.services.userProvider.login(tokenEntity);
            eventEmitter.emit(authEventEnum.LOGIN, token);
            let identityEntity = {
                id: 1234,
                name: 'Jasy'
            };

            return token;
        } catch (error) {
            throw error;
        }
    }

    logout() {
        container.security.services.userProvider.logout();
        eventEmitter.emit(authEventEnum.LOGOUT);
    }
}
