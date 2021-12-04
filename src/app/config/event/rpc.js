import eventEmitter from "../../../packages/event/eventEmitter";
import appEventEnum from "../../enums.appEventEnum";
import container from "../container";
import configManager from "../../../packages/configManager/configManager";
import rpcEventEnum from "../../../packages/rpc/enums/rpcEventEnum";
import UnprocessableEntityError from "../../../packages/contract/errors/UnprocessableEntityError";
import ErrorHelper from "../../../packages/rpc/libs/ErrorHelper";
import toastFacade from "../../../packages/notify/facades/toastFacade";
import UnauthorizedError from "../../../packages/contract/errors/UnauthorizedError";

eventEmitter.on(appEventEnum.AFTER_BOOTSTRAP_LOAD, function () {
    container.rpc.repositories.api.transport.rpcUrl = configManager.get('rpcUrl');
});

eventEmitter.on(rpcEventEnum.CLIENT_RESPONSE_ERROR, function (error) {
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
