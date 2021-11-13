import eventEmitter from "../singletons/eventEmitter";
import authEventEnum from "../../pages/auth/enums/authEventEnum";
import {toast} from "react-toastify";
import rpcEventEnum from "../../packages/rpc/enums/rpcEventEnum";
import UnprocessableEntityError from "../../packages/contract/errors/UnprocessableEntityError";
import ErrorHelper from "../../packages/rpc/libs/ErrorHelper";

/*export default {

    init: function() {
    }
}*/

eventEmitter.on(authEventEnum.AUTHORIZATION, function (token) {
    //console.log(token);
    toast.success("Success authorization!");
});
eventEmitter.on(rpcEventEnum.CLIENT_ERROR, function (error) {
    if (error instanceof UnprocessableEntityError) {
        let errorHelper = new ErrorHelper();
        toast.error(errorHelper.unprocessableEntityErrorToString(error));
    } else {
        toast.error(error.message);
    }
});
