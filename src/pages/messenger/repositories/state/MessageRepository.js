import BaseCrudDispatcher from "../../../../packages/domain/dispatchers/BaseCrudDispatcher";
import chatAction from "../../enums/action/chatAction";

export default class MessageRepository extends BaseCrudDispatcher {

    setChatId(chatId) {
        this.dispatch({
            type: chatAction.SET_CHAT_ID,
            chatId
        });
    }
}
