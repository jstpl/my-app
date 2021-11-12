import eventEmitter from "./singletones/eventEmitter";
import authEventEnum from "../pages/auth/enums/authEventEnum";

class EventConfig {
    init() {
        eventEmitter.on(authEventEnum.AUTHORIZATION, function (token) {
            console.log(token);

        });
    }
}

export default new EventConfig();
