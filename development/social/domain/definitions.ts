
import type { Validation } from '@theshelf/validation';

export type BaseData = {
    readonly id: string;
};

export type CountOperation = 'increase' | 'decrease';

export const SortOrders = {
    POPULAR: 'popular',
    RECENT: 'recent'
} as const;

export const requiredIdValidation: Validation = {
    message: 'Value is not a valid id format',
    UUID:
    {
        required: true
    }
} as const;

export const optionalIdValidation: Validation = {
    message: 'Value is not a valid id format',
    UUID:
    {
        required: false
    }
} as const;

type SortOrderKeys = keyof typeof SortOrders;

export type SortOrder = typeof SortOrders[SortOrderKeys];

export const CONTEXT_ID = 'social';
