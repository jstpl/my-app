import BaseCrudStateRepository from "../../../../packages/domain/repositories/state/BaseCrudStateRepository";
import chatAction from "../../enums/action/chatAction";

export default class MessageRepository extends BaseCrudStateRepository {

    setChatId(chatId) {
        this.dispatch({
            type: chatAction.SET_CHAT_ID,
            chatId
        });
    }
}
