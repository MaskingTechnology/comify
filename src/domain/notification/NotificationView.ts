
import type CreatorView from '../creator/CreatorView';

export default class NotificationView
{
    #id: string;
    #sender: CreatorView;
    #receiver?: CreatorView;

    constructor(id: string, sender: CreatorView, receiver?: CreatorView)
    {
        this.#id = id;
        this.#sender = sender;
        this.#receiver = receiver;
    }

    get id() { return this.#id; }

    get sender() { return this.#sender; }

    get receiver() { return this.#receiver; }
}
