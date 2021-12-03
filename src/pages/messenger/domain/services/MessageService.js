import BaseCrudService from "../../../../packages/domain/services/BaseCrudService";
import container from "../../../../app/config/container";

export default class MessageService extends BaseCrudService {

    async all(query = null) {
        super.all(query);
        let chatId = query.filter.chatId;
        container.messenger.repositories.state.message.setChatId(chatId);
    }

    async send(form = null) {
        let chatId = container.messenger.repositories.state.message.getChatId();
        form.chatId = chatId;
        try {
            await this.repository.send(form);
        } catch (error) {
            throw error;
        }
    }
}
