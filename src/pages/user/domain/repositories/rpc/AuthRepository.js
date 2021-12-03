import BaseRpcRepository from "../../../../../packages/rpc/repositories/BaseRpcRepository";

export default class AuthRepository extends BaseRpcRepository {
    async getTokenByForm(body) {
        let requestEntity = {
            method: 'authentication.getToken',
            body: body,
        };

        try {
            let responseEntity = await this.sendRequest(requestEntity);
            return responseEntity.body;
        } catch (error) {
            throw error;
        }
    }
}
