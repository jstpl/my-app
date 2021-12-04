import eventEmitter from "../../event/eventEmitter";
import socketEventEnum from "../enums/socketEventEnum";
import SocketEventEntity from "../entities/SocketEventEntity";

export default class SocketService {

    showLog = false;

    log(message) {
        if (this.showLog) {
            console.log(message);
        }
    }

    connect(url) {
        var socket = new WebSocket(url);
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
            var data = JSON.parse(event.data);
            // todo: сущность
            let socketEventEntity = new SocketEventEntity();
            socketEventEntity.name = data.name;
            socketEventEntity.data = data.data;
            eventEmitter.emit(socketEventEnum.MESSAGE, socketEventEntity);
        };
        socket.onerror = (error) => {
            eventEmitter.emit(socketEventEnum.ERROR, error);
        };
    }
}
