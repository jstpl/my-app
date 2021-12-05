import BaseCrudStateRepository from "../../../../../packages/domain/repositories/state/BaseCrudStateRepository";

export default class MessageRepository extends BaseCrudStateRepository {

    get reducerPrefix() {
        return 'messengerMessage';
    }

    setChatId(chatId) {
        this.setValue({chatId});
    }

    getChatId() {
        return Number(this.getValue('chatId'));
    }
}
