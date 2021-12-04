import BaseCrudRpcRepository from "../../../../../packages/rpc/repositories/base/BaseCrudRpcRepository";

export default class ChatRepository extends BaseCrudRpcRepository {

    constructor() {
        super();
        this.methodPrefix = 'messenger-chat';
    }
}
