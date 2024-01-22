
import Creator from '../creator/Creator';

import NotificationData from './NotificationData';

export default class Notification extends NotificationData
{
    #sender: Creator;
    #receiver: Creator;

    constructor(data: NotificationData, sender: Creator, receiver: Creator)
    {
        super(data.id, data.senderId, data.receiverId, data.type, data.createdAt);

        this.#sender = sender;
        this.#receiver = receiver;
    }

    get sender() { return this.#sender; }

    get receiver() { return this.#receiver; }
}
