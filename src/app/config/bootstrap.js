import configManager from "../singletons/configManager";
import config from "./config";
import "./event";
// import event from "./event";

/*export default class Bootstrap {

    init() {
    }
}*/

configManager.load(config);
// event.init();
