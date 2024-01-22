
export interface NotificationService
{
    get connected(): boolean;

    get subscriptions(): Map<string, unknown>;

    connect(): Promise<void>;

    disconnect(): Promise<void>;

    subscribe(recipientId: string, subscription: unknown): Promise<void>;

    unsubscribe(recipientId: string): Promise<void>;

    sendNotification(recipientId: string, title: string, message: string): Promise<void>;
}
