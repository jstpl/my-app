import BaseCrudRpcRepository from "../../../../../packages/rpc/repositories/BaseCrudRpcRepository";

export default class ChatRepository extends BaseCrudRpcRepository {

    constructor() {
        super();
        this.methodPrefix = 'messenger-message';
    }

    send(form) {

        console.log(form);
    }
}
