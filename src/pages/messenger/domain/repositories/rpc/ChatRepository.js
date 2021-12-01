import BaseCrudRpcRepository from "../../../../../packages/rpc/BaseCrudRpcRepository";

export default class ChatRepository extends BaseCrudRpcRepository {

    constructor() {
        super();
        this.methodPrefix = 'messenger-chat';
    }
}
