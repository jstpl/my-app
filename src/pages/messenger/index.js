import ChatRepository from "./repositories/rpc/ChatRepository";
import ChatService from "./services/ChatService";
import CrudReducer from "../../packages/domain/reducers/CrudReducer";
import CrudDispatcher from "../../packages/domain/dispatchers/CrudDispatcher";

const actionPrefix = 'messengerChat';

let storeDispatcher = new CrudDispatcher(actionPrefix);
let chatService = new ChatService(storeDispatcher, new ChatRepository());

let chatReducer = new CrudReducer(actionPrefix);
let chatState = chatReducer.getState();

export {chatService, chatState};
