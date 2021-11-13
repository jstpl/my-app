import eventEmitter from "../singletons/eventEmitter";
import authEventEnum from "../../pages/auth/enums/authEventEnum";
import {toast} from "react-toastify";

export default {

    init: function() {
        eventEmitter.on(authEventEnum.AUTHORIZATION, function (token) {
            //console.log(token);
            toast.success("Success!" + token);
        });
    }
}
