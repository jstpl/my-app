import eventEmitter from "../../event/eventEmitter";
import socketEventEnum from "../enums/socketEventEnum";

eventEmitter.on(socketEventEnum.OPEN, function (event) {
    console.log("Соединение установлено.");
    //console.log(event);
});

eventEmitter.on(socketEventEnum.CLOSE, function (event) {
    console.log('Соединение закрыто чисто');
    //console.log(event);
});

eventEmitter.on(socketEventEnum.BREAK, function (event) {
    console.log('Обрыв соединения');
    console.log('Код: ' + event.code + ' причина: ' + event.reason);
    //console.log(event);
});

eventEmitter.on(socketEventEnum.MESSAGE, function (socketEventEntity) {
    console.log("Получены данные ", socketEventEntity);
    // console.log(socketEventEntity);
});

eventEmitter.on(socketEventEnum.ERROR, function (error) {
    console.log("Ошибка ", error.message);
    //console.log(event);
});
