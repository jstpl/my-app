import eventEmitter from "../../event/eventEmitter";
import socketEventEnum from "../enums/socketEventEnum";
import SocketEventEntity from "../entities/SocketEventEntity";
import entityHelper from "../../helpers/entityHelper";

class Connection {

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

let connection = new Connection();

export default class ConnectionService {

    url = null;
    userId = null;

    open() {
        let url = this._getConnectionUr();
        let socket = new WebSocket(url);
        this.bindHandlers(socket, connection);
    }

    bindHandlers(socket, connection) {
        socket.onopen = connection.onOpen;
        socket.onclose = connection.onClose;
        socket.onmessage = connection.onMessage;
        socket.onerror = connection.onError;
    }

    _getConnectionUr() {
        return this.url + '?userId=' + this.userId;
    }
}
