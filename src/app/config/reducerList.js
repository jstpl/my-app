import userReducer from "../../pages/user/reducers/userReducer";
import authReducer from "../../pages/auth/reducers/authReducer";
import messenger from "../../pages/messenger";


export default {
    chatState: messenger.states.chat,
    messageState: messenger.states.message,
    userState: userReducer,
    authState: authReducer,
}
