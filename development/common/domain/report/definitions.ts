
import { type BaseEventData, type BaseEventHandler } from '../definitions';

export type EventData = BaseEventData & {
    readonly postId: string;
    readonly reason: string;
    readonly remark?: string;
};

export type EventHandler = BaseEventHandler<EventData>;

export const EVENT_TOPIC = 'common.report';
