
import webpush, { PushSubscription } from 'web-push';
import { NotConnected, SubscriptionNotFound } from '../../definitions/errors.js';
import { NotificationService } from '../../definitions/interfaces';

type VapidDetails = {
    subject: string;
    publicKey: string;
    privateKey: string;
};

export default class WebPush implements NotificationService
{
    #configuration: VapidDetails;
    #subscriptions?: Map<string, PushSubscription>;

    constructor(configuration: VapidDetails)
    {
        this.#configuration = configuration;
    }

    get connected(): boolean
    {
        return this.#subscriptions !== undefined;
    }

    get subscriptions(): Map<string, PushSubscription>
    {
        return this.#getSubscriptions();
    }

    async connect(): Promise<void>
    {
        this.#subscriptions = new Map();

        webpush.setVapidDetails(this.#configuration.subject, this.#configuration.publicKey, this.#configuration.privateKey);
    }

    async disconnect(): Promise<void>
    {
        this.#subscriptions = undefined;
    }

    async subscribe(recipientId: string, subscription: PushSubscription): Promise<void>
    {
        const subscriptions = this.#getSubscriptions();

        subscriptions.set(recipientId, subscription);
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

        await webpush.sendNotification(subscription, JSON.stringify({ title, body }));
    }

    #getSubscriptions(): Map<string, PushSubscription>
    {
        if (this.#subscriptions === undefined)
        {
            throw new NotConnected();
        }

        return this.#subscriptions;
    }

    #getSubscription(recipientId: string): PushSubscription
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
