
import { Identifier } from '^/primitives/identifier';

import { BaseEventData } from '../definitions';

export type EventData = BaseEventData & {
    readonly postId: Identifier;
    readonly parentId?: Identifier;
};

export type EventHandler = (eventData: EventData) => void;

export const EVENT_CHANNEL = 'common.post';
