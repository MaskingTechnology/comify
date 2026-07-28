
import type { Creator } from '~/creator/';

import type { SortOrder, BaseRecord } from '../definitions';
import { SortOrders } from '../definitions';

export type Record = Omit<BaseRecord, 'id'> & {
    readonly id: string | undefined; // The id is undefined for unestablished relations.
    readonly followerId: string;
    readonly followingId: string;
};

export type Relation = {
    readonly following: Creator;
    readonly established: boolean;
    readonly self: boolean;
};

export type RelationKey = {
    readonly followerId: string;
    readonly followingId: string;
};

export const RECORD_TYPE = 'relation';
export const EVENT_CHANNEL = 'relation';

export { SortOrders, type SortOrder };
