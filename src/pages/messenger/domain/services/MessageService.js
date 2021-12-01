import BaseCrudService from "../../../../packages/domain/services/BaseCrudService";
import domain from "../../../../app/config/domain";

export default class MessageService extends BaseCrudService {

    async all(query = null) {
        super.all(query);
        let chatId = query.filter.chatId;
        domain.messenger.repositories.state.message.setChatId(chatId);
    }
}
