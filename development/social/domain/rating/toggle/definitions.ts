
import type { Publication, Subscription } from '@theshelf/eventbroker';

export type CreateData = {
    readonly postId: string;
}

export type ToggledEventData = {
    readonly tenantId: string;
    readonly creatorId: string;
    readonly postId: string;
    readonly rated: boolean;
};

export type ToggledPublication = Publication<ToggledEventData>;
export type ToggledSubscription = Subscription<ToggledEventData>;

export type ToggledEventHandler = (eventData: ToggledEventData) => void;

export const EVENT_NAME = 'rated';
