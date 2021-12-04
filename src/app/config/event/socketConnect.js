import eventEmitter from "../../../packages/event/eventEmitter";
import appEventEnum from "../../enums.appEventEnum";
import container from "../container";
import configManager from "../../../packages/configManager/configManager";

eventEmitter.on(appEventEnum.AFTER_BOOTSTRAP_LOAD, function () {
    // todo: подключать сокет при авторизации через событие
    // todo: отключать при разлогировании
    let tokenEntity = container.security.services.userProvider.getTokenEntity();
    if (tokenEntity.isAuthenticated) {
        let webSocketConnection = container.webSocket.services.connection;
        webSocketConnection.url = configManager.get('webSocketUrl');
        webSocketConnection.userId = tokenEntity.identity.id;
        webSocketConnection.open();
    }
});
