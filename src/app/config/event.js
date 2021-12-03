import eventEmitter from "../../packages/event/eventEmitter";
import authEventEnum from "../../pages/user/domain/enums/authEventEnum";
import {toast} from "react-toastify";
import rpcEventEnum from "../../packages/rpc/enums/rpcEventEnum";
import UnprocessableEntityError from "../../packages/contract/errors/UnprocessableEntityError";
import ErrorHelper from "../../packages/rpc/libs/ErrorHelper";
import UnauthorizedError from "../../packages/contract/errors/UnauthorizedError";

eventEmitter.on(authEventEnum.LOGIN, function (token) {
    toast.success("Success authorization!");
});

eventEmitter.on(authEventEnum.LOGOUT, function (token) {
    toast.success("Success logout!");
    /*toast.success("Success logout!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
    });*/
});

eventEmitter.on(rpcEventEnum.CLIENT_ERROR, function (error) {
    if (error instanceof UnprocessableEntityError) {
        let errorHelper = new ErrorHelper();
        toast.warning(errorHelper.unprocessableEntityErrorToString(error));
    } else if(error instanceof UnauthorizedError) {
        toast.info(error.message);
        window.location.href = '#user/login';
    } else {
        toast.error(error.message);
    }
});
