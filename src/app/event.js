
import eventEmitter from "./libs/eventEmitter";
import * as authEventEnum from "../pages/auth/enums/authEventEnum";
import {toast} from "react-toastify";

class EventConfig {
    init() {
        eventEmitter.on(authEventEnum.AUTHORIZATION, function (token) {
            console.log(token);
            toast.success("Success!" + token);
        });
    }
}

export default new EventConfig();
