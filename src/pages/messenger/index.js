import MessageService from "./services/MessageService";
import ChatService from "./services/ChatService";
import messengerDispatchers from "./config/messengerDispatchers";
import repositories from "./config/repositories";

let chatService = new ChatService(
    messengerDispatchers.chat,
    repositories.chatRpc
);

let messageService = new MessageService(
    messengerDispatchers.message,
    repositories.messageRpc
);

export {
    chatService,
    messageService
};
