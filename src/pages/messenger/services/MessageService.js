import BaseCrudService from "../../../packages/domain/services/BaseCrudService";
import {dispatchers} from "../index";

export default class MessageService extends BaseCrudService {

    async all(query = null) {
        super.all(query);
        let chatId = query.filter.chatId;
        dispatchers.message.setChatId(chatId);
        // console.log(chatId);
    }
}
