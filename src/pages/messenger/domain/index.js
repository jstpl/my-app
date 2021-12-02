import ChatService from "./services/ChatService";
import MessageService from "./services/MessageService";
import ChatStoreRepository from "./repositories/state/ChatRepository";
import MessageStoreRepository from "./repositories/state/MessageRepository";
import CrudRpcRepository from "../../../packages/rpc/CrudRpcRepository";

let repositories = {
    api: {},
    state: {},
};
repositories.api.chat = new CrudRpcRepository('messenger-chat');
repositories.api.message = new CrudRpcRepository('messenger-message');

repositories.state.chat = new ChatStoreRepository();
repositories.state.message = new MessageStoreRepository();

let services = {};
services.chat = new ChatService(
    repositories.state.chat,
    repositories.api.chat
);

services.message = new MessageService(
    repositories.state.message,
    repositories.api.message
);

// let states = {};
// states.chat = repositories.state.chat.state;
// states.message = repositories.state.message.state;

let reducers = {};
reducers.messengerChat = repositories.state.chat.state;
reducers.messengerMessage = repositories.state.message.state;

export default {
    // states,
    reducers,
    repositories,
    services
};
