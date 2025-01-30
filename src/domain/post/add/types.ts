
import { Event } from '^/integrations/eventbroker';

export type AddedEvent = Event<{
    requesterId: string;
    postId: string;
}>;

export type AddedEventHandler = (requesterId: string, postId: string) => void;
