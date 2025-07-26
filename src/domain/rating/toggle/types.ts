
import type { Publication, Subscription } from '^/integrations/eventbroker';

export type ToggledEventData = {
    tenantId: string;
    creatorId: string;
    postId: string;
    rated: boolean;
};

export type ToggledPublication = Publication<ToggledEventData>;
export type ToggledSubscription = Subscription<ToggledEventData>;

export type ToggledEventHandler = (eventData: ToggledEventData) => void;
