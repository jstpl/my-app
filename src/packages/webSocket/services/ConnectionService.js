import eventEmitter from "../../event/eventEmitter";
import socketEventEnum from "../enums/socketEventEnum";
import SocketEventEntity from "../entities/SocketEventEntity";
import entityHelper from "../../helpers/entityHelper";

export default class ConnectionService {

    url = null;

    open() {
        let socket = new WebSocket(this.url);
        socket.onopen = () => {
            eventEmitter.emit(socketEventEnum.OPEN);
        };
        socket.onclose = (event) => {
            if (event.wasClean) {
                eventEmitter.emit(socketEventEnum.CLOSE, event);
            } else {
                // например, "убит" процесс сервера
                eventEmitter.emit(socketEventEnum.BREAK, event);
            }
        };
        socket.onmessage = (event) => {
            let data = JSON.parse(event.data);
            let socketEventEntity = new SocketEventEntity();
            entityHelper.setValues(socketEventEntity, data);
            eventEmitter.emit(socketEventEnum.MESSAGE, socketEventEntity);
        };
        socket.onerror = (error) => {
            eventEmitter.emit(socketEventEnum.ERROR, error);
        };
    }
}
