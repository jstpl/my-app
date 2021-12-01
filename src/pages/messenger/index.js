import ChatService from "./domain/services/ChatService";
import MessageService from "./domain/services/MessageService";
import ChatStoreRepository from "./domain/repositories/state/ChatRepository";
import MessageStoreRepository from "./domain/repositories/state/MessageRepository";
import messengerReducerPrefix from "./domain/enums/messengerReducerPrefix";
import CrudRpcRepository from "../../packages/rpc/CrudRpcRepository";
import CrudReducer from "../../packages/domain/reducers/CrudReducer";

let repositories = {
    rpc: {},
    state: {},
};
repositories.rpc.chat = new CrudRpcRepository('messenger-chat');
repositories.rpc.message = new CrudRpcRepository('messenger-message');

repositories.state.chat = new ChatStoreRepository(messengerReducerPrefix.chat);
repositories.state.message = new MessageStoreRepository(messengerReducerPrefix.message);

let services = {};
services.chat = new ChatService(
    repositories.state.chat,
    repositories.rpc.chat
);

services.message = new MessageService(
    repositories.state.message,
    repositories.rpc.message
);

let reducers = {};
reducers.chat = new CrudReducer(messengerReducerPrefix.chat);
reducers.message = new CrudReducer(messengerReducerPrefix.message);

let states = {};
states.chat = reducers.chat.getState();
states.message = reducers.message.getState();

const messenger = {
    states,
    repositories,
    services
};

export default messenger;
