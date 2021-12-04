import eventEmitter from "../../event/eventEmitter";
import socketEventEnum from "../enums/socketEventEnum";
import SocketEventEntity from "../entities/SocketEventEntity";
import entityHelper from "../../helpers/entityHelper";

export default class SocketEventHandler {

    onOpen() {
        eventEmitter.emit(socketEventEnum.OPEN);
    }

    onClose(event) {
        if (event.wasClean) {
            eventEmitter.emit(socketEventEnum.CLOSE, event);
        } else {
            // например, "убит" процесс сервера
            eventEmitter.emit(socketEventEnum.BREAK, event);
        }
    }

    onMessage(event) {
        let data = JSON.parse(event.data);
        let socketEventEntity = new SocketEventEntity();
        entityHelper.setValues(socketEventEntity, data);
        eventEmitter.emit(socketEventEnum.MESSAGE, socketEventEntity);
    }

    onError(error) {
        eventEmitter.emit(socketEventEnum.ERROR, error);
    }
}
