import BaseRpcRepository from "../../../../../packages/rpc/BaseRpcRepository";

export default class AuthRepository extends BaseRpcRepository {
    async getTokenByForm(body) {
        let requestEntity = {
            method: 'authentication.getTokenByPassword',
            body: body,
        };

        try {
            let responseEntity = await this.sendRequest(requestEntity);
            return responseEntity.body.token;
        } catch (error) {
            throw error;
        }
    }
}
