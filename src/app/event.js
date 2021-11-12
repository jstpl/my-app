
import eventEmitter from "./libs/eventEmitter";
import {toast} from "react-toastify";
import authEventEnum from "../pages/auth/enums/authEventEnum";

class EventConfig {
    init() {
        eventEmitter.on(authEventEnum.AUTHORIZATION, function (token) {
            console.log(token);
            toast.success("Success!" + token);
        });
    }
}

export default new EventConfig();
