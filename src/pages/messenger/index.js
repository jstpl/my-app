import ChatRepository from "./repositories/rpc/ChatRepository";
import ChatService from "./services/ChatService";
// import ChatDispatcher from "./dispatchers/ChatDispatcher";
import CrudReducer from "../../packages/domain/reducers/CrudReducer";
import CrudDispatcher from "../../packages/domain/reducers/CrudDispatcher";
// import store from "../../app/config/store";
// import DataProvider from "../../packages/domain/DataProvider";

const actionPrefix = 'messengerChat';

/**
 * можно создавать кастомные редьюсеры, наследуя их от BaseCrudReducer
 */
/*let chatReducerInstance = new CrudReducer();
chatReducerInstance.prefix = actionPrefix;
chatReducerInstance.initialState = {
    dataProvider: new DataProvider(),
};*/

// let chatReducer = chatReducerInstance.run.bind(chatReducerInstance);
// let chatReducer = chatReducerInstance.getReducer();


let chatService = new ChatService(new ChatRepository());
// chatService.reducer =
chatService.reducerDispatcher = new CrudDispatcher(actionPrefix);
let chatReducer = (new CrudReducer(actionPrefix)).getState();
// chatService.reducerPrefix = actionPrefix;

// let dispatcher = new ChatDispatcher();
// dispatcher.reducerPrefix = actionPrefix;
// chatService.reducerDispatcher = dispatcher;

// chatService.reducer = chatReducerInstance;


export {chatService, chatReducer};
