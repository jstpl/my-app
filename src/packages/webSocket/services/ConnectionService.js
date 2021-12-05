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
        this.eventHandler.bindHandlers(this.connection);
        window.addEventListener("unload", function () {
            if(this.connection.readyState === WebSocket.OPEN)
                this.connection.close();
        });
    }

    close() {
        this.connection.close();
    }

    _getConnectionUr() {
        return this.url + '?userId=' + this.userId;
    }
}
