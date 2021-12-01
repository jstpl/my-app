import CrudReducer from "../../../packages/domain/reducers/CrudReducer";
import messengerReducerPrefix from "../enums/messengerReducerPrefix";

let messengerStates = {
    chat: (new CrudReducer(messengerReducerPrefix.chat)).getState(),
    message: (new CrudReducer(messengerReducerPrefix.message)).getState(),
};

export default messengerStates;
