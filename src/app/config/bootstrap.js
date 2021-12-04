import config from "./config";
import configManager from "../../packages/configManager/configManager";
import container from "./container";
import eventEmitter from "../../packages/event/eventEmitter";
import store from "./store";
import appEventEnum from "../enums.appEventEnum";
import breadcrumbFacade from "../../packages/breadcrumb/domain/facades/breadcrumbFacade";

eventEmitter.emit(appEventEnum.BEFORE_BOOTSTRAP_LOAD);

configManager.load(config);
container.rpc.repositories.api.transport.rpcUrl = configManager.get('rpcUrl');
container.app.store = store;
container.security.services.userProvider.init();
breadcrumbFacade.addHome();
breadcrumbFacade.add('Main');

// todo: подключать сокет при авторизации через событие
// todo: отключать при разлогировании

let tokenEntity = container.security.services.userProvider.getTokenEntity();
if (tokenEntity.isAuthenticated) {
    let webSocketConnection = container.webSocket.services.connection;
    webSocketConnection.url = configManager.get('webSocketUrl');
    webSocketConnection.userId = tokenEntity.identity.id;
    webSocketConnection.open();
}

eventEmitter.emit(appEventEnum.AFTER_BOOTSTRAP_LOAD);
