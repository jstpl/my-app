// import ChatRepository from "./repositories/rpc/ChatRepository";
// import ChatService from "./services/ChatService";
import CrudReducer from "../../packages/domain/reducers/CrudReducer";
import CrudDispatcher from "../../packages/domain/dispatchers/CrudDispatcher";
import BaseCrudService from "../../packages/domain/services/BaseCrudService";
import CrudRpcRepository from "../../packages/rpc/CrudRpcRepository";
import ChatDispatcher from "./dispatchers/ChatDispatcher";
import MessageService from "./services/MessageService";
import MessageDispatcher from "./dispatchers/MessageDispatcher";
import ChatService from "./services/ChatService";

const chatActionPrefix = 'messengerChat';
const messageActionPrefix = 'messengerMessage';

let dispatchers = {};
dispatchers.chat = new ChatDispatcher(chatActionPrefix);
dispatchers.message = new MessageDispatcher(messageActionPrefix);

let chatService = new ChatService(
    new ChatDispatcher(chatActionPrefix),
    new CrudRpcRepository('messenger-chat')
);
let chatState = (new CrudReducer(chatActionPrefix)).getState();


let messageService = new MessageService(
    new MessageDispatcher(messageActionPrefix),
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
    messageState,
    dispatchers
};
