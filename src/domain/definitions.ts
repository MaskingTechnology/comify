
import type { Validation } from '@theshelf/validation';

export const SortOrders = {
    POPULAR: 'popular',
    RECENT: 'recent'
} as const;

export const requiredIdValidation: Validation =
{
    message: 'Value is not a valid id format',
    UUID:
    {
        required: true
    }
};

export const optionalIdValidation: Validation =
{
    message: 'Value is not a valid id format',
    UUID:
    {
        required: false
    }
};

type SortOrderKeys = keyof typeof SortOrders;

export type SortOrder = typeof SortOrders[SortOrderKeys];
