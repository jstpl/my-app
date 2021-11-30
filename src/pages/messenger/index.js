import ChatRepository from "./repositories/rpc/ChatRepository";
import ChatService from "./services/ChatService";
import CrudReducer from "../../packages/domain/reducers/CrudReducer";
import CrudDispatcher from "../../packages/domain/reducers/CrudDispatcher";

const actionPrefix = 'messengerChat';

let chatService = new ChatService(new ChatRepository());
chatService.reducerDispatcher = new CrudDispatcher(actionPrefix);
let chatReducer = new CrudReducer(actionPrefix);
let chatState = chatReducer.getState();

export {chatService, chatState};
