
import { Identifier } from '^/primitives/identifier';

import { BaseEventData, BaseEventHandler } from '../definitions';

export type EventData = BaseEventData & {
    readonly followerId: Identifier;
    readonly followingId: Identifier;
};

export type EventHandler = BaseEventHandler<EventData>;

export const EVENT_TOPIC = 'common.relation';
