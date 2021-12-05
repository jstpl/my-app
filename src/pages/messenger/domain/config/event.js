import socketEventEnum from "../../../../packages/webSocket/enums/socketEventEnum";
import messengerEventEnum from "../enums/messengerEventEnum";

export default function (container, eventEmitter) {

    eventEmitter.on(socketEventEnum.MESSAGE, function (socketEventEntity) {
        if(socketEventEntity.name === 'sendMessage') {
            // container.notify.services.toast.info(socketEventEntity.name)
            // console.log(socketEventEntity.data.chatId);
            container.messenger.services.message.newMessage(socketEventEntity.data);
        }
    });

    eventEmitter.on(messengerEventEnum.NEW_MESSAGE, function (data) {
        // console.log();
        if(data.direction === 'in') {
            container.notify.services.toast.info('New message! ' + data.text);
        }
    });

}
