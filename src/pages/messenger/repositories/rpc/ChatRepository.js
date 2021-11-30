import BaseCrudRpcRepository from "../../../../packages/rpc/BaseCrudRpcRepository";

export default class ChatRepository extends BaseCrudRpcRepository {

    endpoint() {
        return 'messenger-chat';
    }
}
