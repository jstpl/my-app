import userReducer from "../../pages/user/reducers/userReducer";
import authReducer from "../../pages/auth/reducers/authReducer";
import messenger from "../../pages/messenger/domain";

export default {
    messengerChat: messenger.states.chat,
    messengerMessage: messenger.states.message,
    userState: userReducer,
    authState: authReducer,
}
