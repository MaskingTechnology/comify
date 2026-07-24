
import { BaseEventData } from '../definitions';

export type EventData = BaseEventData & {
    readonly postId: string;
};

export type EventHandler = (eventData: EventData) => void;

export const EVENT_CHANNEL = 'common.post';
