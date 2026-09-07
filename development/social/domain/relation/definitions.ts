
import { type Identifier } from '@comify/common/primitives/identifier';

import { type Creator } from '~/creator/';

import { type SortOrder, type BaseRecord, SortOrders } from '../definitions';

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

export type RelationId = string;

export type RelationKey = {
    readonly followerId: Identifier;
    readonly followingId: Identifier;
};

export const RECORD_TYPE = 'relation';

export { SortOrders, type SortOrder };
