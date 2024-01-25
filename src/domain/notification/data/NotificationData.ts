
export default class NotificationData
{
    #id: string;

    #senderId: string;
    #receiverId: string;

    #type: string;
    #createdAt: Date;

    constructor(id: string, senderId: string, receiverId: string, type: string, createdAt = new Date())
    {
        this.#id = id;

        this.#senderId = senderId;
        this.#receiverId = receiverId;

        this.#type = type;
        this.#createdAt = createdAt;
    }

    get id() { return this.#id; }

    get senderId() { return this.#senderId; }

    get receiverId() { return this.#receiverId; }

    get type() { return this.#type; }

    get createdAt() { return this.#createdAt; }
}
