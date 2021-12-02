
import config from "./config";
import "./event";
import configManager from "../../packages/configManager/configManager";
import container from "./container";

configManager.load(config);

container.security.services.security.init();
