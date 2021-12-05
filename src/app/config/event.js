import container from "./container";
import eventEmitter from "../../packages/event/eventEmitter";
import authEventEnum from "../../pages/user/domain/enums/authEventEnum";
import toastFacade from "../../packages/notify/facades/toastFacade";
import appEventEnum from "../enums.appEventEnum";
import "../../packages/webSocket/config/eventDev";
import "./event/rpc";
import "./event/socketConnect";
import breadcrumbFacade from "../../packages/breadcrumb/domain/facades/breadcrumbFacade";
import socketEventEnum from "../../packages/webSocket/enums/socketEventEnum";
import eventConfigHelper from "../../packages/helpers/eventConfigHelper";

eventEmitter.on(authEventEnum.LOGIN, function (token) {
    toastFacade.success("Success authorization!");
});

eventEmitter.on(authEventEnum.LOGOUT, function (token) {
    toastFacade.success("Success logout!");
});

/*eventEmitter.on(rpcEventEnum.CLIENT_RESPONSE_SUCCESS, function (responseEntity) {
    console.log(responseEntity);
});*/

eventEmitter.on(appEventEnum.AFTER_BOOTSTRAP_LOAD, function () {
    breadcrumbFacade.addHome();
    breadcrumbFacade.add('Main');
});

eventEmitter.on(appEventEnum.AFTER_BOOTSTRAP_LOAD, function () {
    /*eventEmitter.on(socketEventEnum.MESSAGE, function (socketEventEntity) {
        //toastFacade.info(socketEventEntity.name);
    });*/
});



eventConfigHelper.loadFromDomains(container, eventEmitter);
