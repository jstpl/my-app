
import config from "./config";
import "./event";
// import store from "./store";
import configManager from "../../packages/configManager/configManager";
// import container from "../../packages/container/container";

configManager.load(config);
// container.set('store', store);
