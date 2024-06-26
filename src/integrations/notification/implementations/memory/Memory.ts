
import { NotificationService } from '../../definitions/interfaces';
import NotConnected from '../../errors/NotConnected.js';
import SubscriptionNotFound from '../../errors/SubscriptionNotFound.js';

type Notification = {
    title: string;
    body: string;
};

export default class Memory implements NotificationService
{
    #subscriptions?: Map<string, Notification[]>;

    get connected(): boolean
    {
        return this.#subscriptions !== undefined;
    }

    get subscriptions(): Map<string, Notification[]>
    {
        return this.#getSubscriptions();
    }

    async connect(): Promise<void>
    {
        this.#subscriptions = new Map();
    }

    async disconnect(): Promise<void>
    {
        this.#subscriptions = undefined;
    }

    async subscribe(recipientId: string): Promise<void>
    {
        const subscriptions = this.#getSubscriptions();

        subscriptions.set(recipientId, []);
    }

    async unsubscribe(recipientId: string): Promise<void>
    {
        const subscriptions = this.#getSubscriptions();

        if (subscriptions.has(recipientId) === false)
        {
            throw new SubscriptionNotFound(recipientId);
        }

        subscriptions.delete(recipientId);
    }

    async sendNotification(recipientId: string, title: string, body: string): Promise<void>
    {
        const subscription = this.#getSubscription(recipientId);

        subscription.push({ title, body });
    }

    #getSubscriptions(): Map<string, Notification[]>
    {
        if (this.#subscriptions === undefined)
        {
            throw new NotConnected();
        }

        return this.#subscriptions;
    }

    #getSubscription(recipientId: string): Notification[]
    {
        const subscriptions = this.#getSubscriptions();
        const subscription = subscriptions.get(recipientId);

        if (subscription === undefined)
        {
            throw new SubscriptionNotFound(recipientId);
        }

        return subscription;
    }
}
