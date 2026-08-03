
import { Identifier } from '^/primitives/identifier';

import { BaseEventData } from '../definitions';

export type EventData = BaseEventData & {
    readonly creatorId: Identifier;
};

export type EventHandler = (eventData: EventData) => void;

export const EVENT_CHANNEL = 'common.creator';
