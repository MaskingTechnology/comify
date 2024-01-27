
export default class NotificationData
{
    #id: string;

    #type: string;

    #senderId: string;
    #receiverId: string;
    #postId: string | undefined;
    #reactionId: string | undefined;

    #createdAt: Date;

    constructor(id: string, type: string, senderId: string, receiverId: string, postId: string | undefined, reactionId: string | undefined, createdAt = new Date())
    {
        this.#id = id;

        this.#type = type;

        this.#senderId = senderId;
        this.#receiverId = receiverId;
        this.#postId = postId;
        this.#reactionId = reactionId;

        this.#createdAt = createdAt;
    }

    get id() { return this.#id; }

    get type() { return this.#type; }

    get senderId() { return this.#senderId; }

    get receiverId() { return this.#receiverId; }

    get postId() { return this.#postId; }

    get reactionId() { return this.#reactionId; }

    get createdAt() { return this.#createdAt; }
}
