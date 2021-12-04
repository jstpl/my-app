export default class ConnectionService {

    url = null;
    userId = null;
    connection = null;
    eventHandler = null;

    constructor(eventHandler) {
        this.eventHandler = eventHandler;
    }

    open() {
        let url = this._getConnectionUr();
        this.connection = new WebSocket(url);
        this.bindHandlers(this.connection, this.eventHandler);
    }

    close() {
        this.connection.close();
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
