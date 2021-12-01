import ChatDispatcher from "../dispatchers/ChatDispatcher";
import messengerReducerPrefix from "../enums/messengerReducerPrefix";
import MessageDispatcher from "../dispatchers/MessageDispatcher";

let dispatchers = {};

dispatchers.chat = new ChatDispatcher(messengerReducerPrefix.chat);
dispatchers.message = new MessageDispatcher(messengerReducerPrefix.message);

export default dispatchers;
