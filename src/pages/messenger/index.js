// import ChatRepository from "./repositories/rpc/ChatRepository";
// import ChatService from "./services/ChatService";
import CrudReducer from "../../packages/domain/reducers/CrudReducer";
import CrudDispatcher from "../../packages/domain/dispatchers/CrudDispatcher";
import BaseCrudService from "../../packages/domain/services/BaseCrudService";
import CrudRpcRepository from "../../packages/rpc/CrudRpcRepository";

const actionPrefix = 'messengerChat';

let chatService = new BaseCrudService(
    new CrudDispatcher(actionPrefix),
    new CrudRpcRepository('messenger-chat')
);

/*let chatService = new ChatService(
    new CrudDispatcher(actionPrefix),
    new ChatRepository()
);*/

let chatReducer = new CrudReducer(actionPrefix);
let chatState = chatReducer.getState();

export {chatService, chatState};
