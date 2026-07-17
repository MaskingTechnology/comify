
import type { Validation } from '@theshelf/validation';

import type { Metrics } from '~/creator.metrics';
import type { ImageData } from '~/image';

import { type SortOrder, SortOrders, type BaseData, type CountOperation } from '../definitions';

export type Record = BaseData &
{
    readonly tenantId: string;
    readonly fullName: string;
    readonly nickname: string;
    readonly email: string;
    readonly portraitId?: string;
    readonly joinedAt: string;
};

export type Creator = Omit<Record, 'tenantId' | 'email' | 'portraitId'> &
{
    readonly portrait?: ImageData;
    readonly metrics: Metrics;
};

export { type CountOperation, SortOrders, type SortOrder };

export const RECORD_TYPE = 'creator';
export const EVENT_CHANNEL = 'creator';
export const IMAGE_TYPE = 'portrait';

export const NICKNAME_STRING_PATTERN = '^[a-z0-9_]+$';
export const NICKNAME_MAX_LENGTH = 20;
export const FULL_NAME_MAX_LENGTH = 200;

export const fullNameValidation: Validation = {
    message: 'Value is empty or too long',
    STRING: {
        required: true,
        maxLength: FULL_NAME_MAX_LENGTH
    }
};
