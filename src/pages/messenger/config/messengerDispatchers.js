import ChatDispatcher from "../dispatchers/ChatDispatcher";
import messengerReducerPrefix from "../enums/messengerReducerPrefix";
import MessageDispatcher from "../dispatchers/MessageDispatcher";

let messengerDispatchers = {};
messengerDispatchers.chat = new ChatDispatcher(messengerReducerPrefix.chat);
messengerDispatchers.message = new MessageDispatcher(messengerReducerPrefix.message);

export default messengerDispatchers;
