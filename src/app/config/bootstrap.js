import config from "./config";
import configManager from "../../packages/configManager/configManager";
import container from "./container";
import eventEmitter from "../../packages/event/eventEmitter";
import store from "./store";
import appEventEnum from "../enums.appEventEnum";

eventEmitter.emit(appEventEnum.BEFORE_BOOTSTRAP);

configManager.load(config);
container.rpc.repositories.api.transport.rpcUrl = configManager.get('rpcUrl');
container.app.store = store;
container.security.services.userProvider.init();

eventEmitter.emit(appEventEnum.AFTER_BOOTSTRAP);
