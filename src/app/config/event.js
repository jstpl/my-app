import eventEmitter from "../../packages/event/eventEmitter";
import authEventEnum from "../../pages/user/domain/enums/authEventEnum";
import rpcEventEnum from "../../packages/rpc/enums/rpcEventEnum";
import UnprocessableEntityError from "../../packages/contract/errors/UnprocessableEntityError";
import ErrorHelper from "../../packages/rpc/libs/ErrorHelper";
import UnauthorizedError from "../../packages/contract/errors/UnauthorizedError";
import toastFacade from "../../packages/notify/facades/toastFacade";

eventEmitter.on(authEventEnum.LOGIN, function (token) {
    // toast.success();
    toastFacade.success("Success authorization!");
});


eventEmitter.on(authEventEnum.LOGOUT, function (token) {
    toastFacade.success("Success logout!");
    //toast.success();
    /*toast.success("Success logout!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'foo-bar'
    });*/
});

eventEmitter.on(rpcEventEnum.CLIENT_ERROR, function (error) {
    if (error instanceof UnprocessableEntityError) {
        let errorHelper = new ErrorHelper();
        toastFacade.error(errorHelper.unprocessableEntityErrorToString(error));
    } else if (error instanceof UnauthorizedError) {
        toastFacade.info(error.message);
        window.location.href = '#user/login';
    } else {
        toastFacade.error(error.message);
    }
});
