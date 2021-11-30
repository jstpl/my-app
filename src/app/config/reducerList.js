import {chatState} from "../../pages/messenger";
import userReducer from "../../pages/user/reducers/userReducer";
import authReducer from "../../pages/auth/reducers/authReducer";

export default {
    chatState: chatState,
    userState: userReducer,
    authState: authReducer,
}
