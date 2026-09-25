
import { type Identifier } from '^/primitives/identifier';

import { type BaseEventData, type BaseEventHandler } from '../definitions';

export type EventData = BaseEventData & {
    readonly postId: Identifier;
    readonly parentId?: Identifier;
};

export type EventHandler = BaseEventHandler<EventData>;

export const EVENT_TOPIC = 'common.post';
