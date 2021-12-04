import config from "./config";
import configManager from "../../packages/configManager/configManager";
import container from "./container";
import eventEmitter from "../../packages/event/eventEmitter";
import store from "./store";
import appEventEnum from "../enums.appEventEnum";
import breadcrumbFacade from "../../packages/breadcrumb/domain/facades/breadcrumbFacade";
import ConnectionService from "../../packages/webSocket/services/ConnectionService";

eventEmitter.emit(appEventEnum.BEFORE_BOOTSTRAP_LOAD);

configManager.load(config);
container.rpc.repositories.api.transport.rpcUrl = configManager.get('rpcUrl');
container.app.store = store;
container.security.services.userProvider.init();
breadcrumbFacade.addHome();
breadcrumbFacade.add('Main');

let tokenEntity = container.security.services.userProvider.getTokenEntity();
// console.log(tokenEntity.isAuthenticated);

// todo: подключать сокет при авторизации через событие
// todo: отключать при разлогировании

if(tokenEntity.isAuthenticated) {
    let socket = new ConnectionService();
    let webSocketUrl = configManager.get('webSocketUrl');
    let userId = tokenEntity.identity.id;
    socket.connect(webSocketUrl + '?userId=' + userId);
}

eventEmitter.emit(appEventEnum.AFTER_BOOTSTRAP_LOAD);
