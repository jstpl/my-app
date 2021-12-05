import socketEventEnum from "../../../../packages/webSocket/enums/socketEventEnum";

export default function (container, eventEmitter) {
    eventEmitter.on(socketEventEnum.MESSAGE, function (socketEventEntity) {
        console.log(container.notify.services.toast.info(socketEventEntity.name));
        //container.notify.services.toast.info(socketEventEntity.name);
        //console.log("Получены данные ", socketEventEntity);
        // console.log(socketEventEntity);
    });
}
