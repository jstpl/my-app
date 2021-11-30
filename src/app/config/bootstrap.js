import configManager from "../singletons/configManager";
import config from "./config";
import "./event";
import store from "./store";

configManager.load(config);
configManager.set('store', store);
