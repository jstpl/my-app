import repositories from "./config/repositories";
import services from "./config/services";
import states from "./config/states";
import dispatchers from "./config/messengerDispatchers";

const messenger = {
    dispatchers,
    states,
    repositories,
    services
};

export default messenger;
