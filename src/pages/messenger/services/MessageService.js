import BaseCrudService from "../../../packages/domain/services/BaseCrudService";
import messengerDispatchers from "../config/messengerDispatchers";

export default class MessageService extends BaseCrudService {

    async all(query = null) {
        super.all(query);
        let chatId = query.filter.chatId;
        messengerDispatchers.message.setChatId(chatId);
        // console.log(chatId);
    }
}
