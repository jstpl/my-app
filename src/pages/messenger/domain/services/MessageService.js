import BaseCrudService from "../../../../packages/domain/services/BaseCrudService";
import messenger from "../../index";

export default class MessageService extends BaseCrudService {

    async all(query = null) {
        super.all(query);
        let chatId = query.filter.chatId;
        messenger.repositories.state.message.setChatId(chatId);
    }
}