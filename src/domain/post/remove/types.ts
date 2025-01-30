
import { Event } from '^/integrations/eventbroker';

export type RemovedEvent = Event<{
    requesterId: string;
    postId: string;
}>;

export type RemovedEventHandler = (requesterId: string, postId: string) => void;
