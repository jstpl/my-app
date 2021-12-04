import eventEmitter from "../../packages/event/eventEmitter";
import authEventEnum from "../../pages/user/domain/enums/authEventEnum";
import rpcEventEnum from "../../packages/rpc/enums/rpcEventEnum";
import UnprocessableEntityError from "../../packages/contract/errors/UnprocessableEntityError";
import ErrorHelper from "../../packages/rpc/libs/ErrorHelper";
import UnauthorizedError from "../../packages/contract/errors/UnauthorizedError";
import toastFacade from "../../packages/notify/facades/toastFacade";
import appEventEnum from "../enums.appEventEnum";
import socketEventEnum from "../../packages/webSocket/enums/socketEventEnum";
import SocketEventEntity from "../../packages/webSocket/entities/SocketEventEntity";

eventEmitter.on(authEventEnum.LOGIN, function (token) {
    toastFacade.success("Success authorization!");
});

eventEmitter.on(authEventEnum.LOGOUT, function (token) {
    toastFacade.success("Success logout!");
});




eventEmitter.on(socketEventEnum.OPEN, function (event) {
    console.log("Соединение установлено.");
    //console.log(event);
});

eventEmitter.on(socketEventEnum.CLOSE, function (event) {
    console.log('Соединение закрыто чисто');
    //console.log(event);
});

eventEmitter.on(socketEventEnum.BREAK, function (event) {
    console.log('Обрыв соединения');
    console.log('Код: ' + event.code + ' причина: ' + event.reason);
    //console.log(event);
});

eventEmitter.on(socketEventEnum.MESSAGE, function (socketEventEntity) {
    console.log("Получены данные ", socketEventEntity);
    // console.log(socketEventEntity);
});

eventEmitter.on(socketEventEnum.ERROR, function (error) {
    console.log("Ошибка ", error.message);
    //console.log(event);
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

/*eventEmitter.on(rpcEventEnum.CLIENT_RESPONSE_SUCCESS, function (responseEntity) {
    console.log(responseEntity);
});

eventEmitter.on(appEventEnum.AFTER_BOOTSTRAP, function () {
    console.log('app.bootstrap.after');
});*/
