import ChatService from "./services/ChatService";
import MessageService from "./services/MessageService";
import ChatStoreRepository from "./repositories/state/ChatRepository";
import MessageStoreRepository from "./repositories/state/MessageRepository";
import CrudRpcRepository from "../../../packages/rpc/CrudRpcRepository";

let repositories = {
    rpc: {},
    state: {},
};
repositories.rpc.chat = new CrudRpcRepository('messenger-chat');
repositories.rpc.message = new CrudRpcRepository('messenger-message');

repositories.state.chat = new ChatStoreRepository();
repositories.state.message = new MessageStoreRepository();

let services = {};
services.chat = new ChatService(
    repositories.state.chat,
    repositories.rpc.chat
);

services.message = new MessageService(
    repositories.state.message,
    repositories.rpc.message
);

let states = {};
states.chat = repositories.state.chat.state;
states.message = repositories.state.message.state;

const messengerDomain = {
    states,
    repositories,
    services
};

export default messengerDomain;
