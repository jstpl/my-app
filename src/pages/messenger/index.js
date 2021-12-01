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
import messengerReducerPrefix from "./enums/messengerReducerPrefix";

// const chatActionPrefix = 'messengerChat';
// const messageActionPrefix = 'messengerMessage';

let dispatchers = {};
dispatchers.chat = new ChatDispatcher(messengerReducerPrefix.chat);
dispatchers.message = new MessageDispatcher(messengerReducerPrefix.message);

let chatService = new ChatService(
    new ChatDispatcher(messengerReducerPrefix.chat),
    new CrudRpcRepository('messenger-chat')
);
let chatState = (new CrudReducer(messengerReducerPrefix.chat)).getState();


let messageService = new MessageService(
    new MessageDispatcher(messengerReducerPrefix.message),
    new CrudRpcRepository('messenger-message')
);
let messageState = (new CrudReducer(messengerReducerPrefix.message)).getState();

export {
    chatService,
    chatState,
    messageService,
    messageState,
    dispatchers
};
