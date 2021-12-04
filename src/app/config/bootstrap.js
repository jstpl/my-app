import config from "./config";
import configManager from "../../packages/configManager/configManager";
import container from "./container";
import eventEmitter from "../../packages/event/eventEmitter";
import store from "./store";
import appEventEnum from "../enums.appEventEnum";
import breadcrumbFacade from "../../packages/breadcrumb/domain/facades/breadcrumbFacade";
import SocketService from "../../packages/webSocket/services/SocketService";

eventEmitter.emit(appEventEnum.BEFORE_BOOTSTRAP_LOAD);

configManager.load(config);
container.rpc.repositories.api.transport.rpcUrl = configManager.get('rpcUrl');
container.app.store = store;
container.security.services.userProvider.init();
breadcrumbFacade.addHome();
breadcrumbFacade.add('Main');

let socket = new SocketService();
socket.connect('ws://tournament.casino:8001?userId=1');

eventEmitter.emit(appEventEnum.AFTER_BOOTSTRAP_LOAD);
