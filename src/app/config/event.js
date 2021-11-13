import eventEmitter from "../singletons/eventEmitter";
import authEventEnum from "../../pages/auth/enums/authEventEnum";
import {toast} from "react-toastify";
import rpcEventEnum from "../../packages/rpc/enums/rpcEventEnum";

export default {

    init: function() {
        eventEmitter.on(authEventEnum.AUTHORIZATION, function (token) {
            //console.log(token);
            toast.success("Success!" + token);
        });
        eventEmitter.on(rpcEventEnum.CLIENT_ERROR, function (error) {
            //console.log(token);
            if(error.name === 'UnprocessableEntityError') {
                toast.error(11111);
            } else {
                //toast.error(error.message);
            }
        });
    }
}
