
import { BaseEventData } from '../definitions';

export type EventData = BaseEventData & {
    readonly followerId: string;
    readonly followingId: string;
};

export type EventHandler = (eventData: EventData) => void;

export const EVENT_CHANNEL = 'common.relation';
