
import Creator from './Creator';

export default class Notification
{
    #id: string;
    #sender: Creator;
    #receiver?: Creator;

    constructor(id: string, sender: Creator, receiver?: Creator)
    {
        this.#id = id;
        this.#sender = sender;
        this.#receiver = receiver;
    }

    get id() { return this.#id; }

    get sender() { return this.#sender; }

    get receiver() { return this.#receiver; }
}
