import BaseCrudRpcRepository from "../../../../packages/rpc/BaseCrudRpcRepository";

export default class ChatRepository extends BaseCrudRpcRepository {

    constructor(methodPrefix = 'messenger-chat') {
        super(methodPrefix);
    }
}
