import BaseCrudDispatcher from "../../../packages/domain/dispatchers/BaseCrudDispatcher";
import crudAction from "../../../packages/domain/enums/crudAction";
import chatAction from "../enums/chatAction";

export default class MessageDispatcher extends BaseCrudDispatcher {

    setChatId(chatId) {
        this.dispatch({
            type: chatAction.SET_CHAT_ID,
            chatId
        });
    }
}
