
import { Identifier } from '^/primitives/identifier';

import { BaseEventData, BaseEventHandler } from '../definitions';

export type EventData = BaseEventData & {
    readonly creatorId: Identifier;
    readonly postId: Identifier;
};

export type EventHandler = BaseEventHandler<EventData>;

export const EVENT_TOPIC = 'common.post.rating';
