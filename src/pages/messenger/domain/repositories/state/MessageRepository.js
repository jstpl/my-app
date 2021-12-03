import BaseCrudStateRepository from "../../../../../packages/domain/repositories/state/BaseCrudStateRepository";

export default class MessageRepository extends BaseCrudStateRepository {

    /*get actions() {
        return {
            SET_CHAT_ID: 'SET_CHAT_ID',
        };
    }*/

    get reducerPrefix() {
        return 'messengerMessage';
    }

    setChatId(chatId) {
        this.setValue({chatId});
        /*this.dispatch({
            type: this.actions.SET_CHAT_ID,
            chatId
        });*/
    }

    getChatId() {
        return this.getValue('chatId');
    }
}
