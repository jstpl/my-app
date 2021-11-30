// import ChatRepository from "./repositories/rpc/ChatRepository";
// import ChatService from "./services/ChatService";
import CrudReducer from "../../packages/domain/reducers/CrudReducer";
import CrudDispatcher from "../../packages/domain/dispatchers/CrudDispatcher";
import BaseCrudService from "../../packages/domain/services/BaseCrudService";
import CrudRpcRepository from "../../packages/rpc/CrudRpcRepository";

const chatActionPrefix = 'messengerChat';
let chatService = new BaseCrudService(
    new CrudDispatcher(chatActionPrefix),
    new CrudRpcRepository('messenger-chat')
);
let chatState = (new CrudReducer(chatActionPrefix)).getState();


const messageActionPrefix = 'messengerMessage';
let messageService = new BaseCrudService(
    new CrudDispatcher(messageActionPrefix),
    new CrudRpcRepository('messenger-message')
);
let messageState = (new CrudReducer(messageActionPrefix)).getState();

/*let chatService = new ChatService(
    new CrudDispatcher(chatActionPrefix),
    new ChatRepository()
);*/

export {
    chatService,
    chatState,
    messageService,
    messageState
};
