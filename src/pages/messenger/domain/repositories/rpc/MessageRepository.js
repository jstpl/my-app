import BaseCrudRpcRepository from "../../../../../packages/rpc/repositories/base/BaseCrudRpcRepository";

export default class ChatRepository extends BaseCrudRpcRepository {

    constructor() {
        super();
        this.methodPrefix = 'messenger-message';
    }

    async send(form) {
        let method = this.methodName('send');
        try {
            return await this.sendByMethod(method, form);
        } catch (error) {
            throw error;
        }
    }
}
