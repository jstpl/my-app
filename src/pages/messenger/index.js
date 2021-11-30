import ChatRepository from "./repositories/rpc/ChatRepository";
import ChatService from "./services/ChatService";
// import CrudReducer from "../../packages/domain/reducers/CrudReducer";
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
chatService.prefix = actionPrefix;
// chatService.reducer = chatReducerInstance;


export {chatService/*, chatReducer*/};
