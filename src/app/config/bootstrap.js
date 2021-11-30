
import config from "./config";
import "./event";
import store from "./store";
import configManager from "../../packages/configManager/configManager";

configManager.load(config);
configManager.set('store', store);
