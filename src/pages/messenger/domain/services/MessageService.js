import BaseCrudService from "../../../../packages/domain/services/BaseCrudService";
import container from "../../../../app/config/container";
import Query from "../../../../packages/domain/libs/Query";
import eventEmitter from "../../../../packages/event/eventEmitter";
import messengerEventEnum from "../enums/messengerEventEnum";

export default class MessageService extends BaseCrudService {

    async all(query = null) {
        super.all(query);
        let chatId = query.filter.chatId;
        container.messenger.repositories.state.message.setChatId(chatId);
    }

    async send(form = null) {
        form.chatId = container.messenger.repositories.state.message.getChatId();
        try {
            await this.repository.send(form);
        } catch (error) {
            // throw error;
        }
    }

    async update() {
        let chatId = container.messenger.repositories.state.message.getChatId();
        let query = new Query();
        query.filter.chatId = chatId;
        this.all(query);
    }

    async newMessage(data = null) {
        let chatId = container.messenger.repositories.state.message.getChatId();
        eventEmitter.emit(messengerEventEnum.NEW_MESSAGE, data);
        if(chatId === data.chatId) {
            this.update();
            // console.log(chatId, data.chatId);
        }
    }
}
