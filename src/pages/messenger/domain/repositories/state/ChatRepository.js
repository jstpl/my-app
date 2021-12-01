import BaseCrudStateRepository from "../../../../../packages/domain/repositories/state/BaseCrudStateRepository";

export default class ChatRepository extends BaseCrudStateRepository {

    get reducerPrefix() {
        return 'messengerChat';
    }
}
