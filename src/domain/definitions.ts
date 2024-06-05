
import type { Validation } from '^/integrations/validation/module';

export const SortOrder = {
    POPULAR: 'popular',
    RECENT: 'recent'
} as const;

export const requiredIdValidation: Validation =
{
    message: 'Invalid id format',
    STRING:
    {
        required: true,
        maxLength: 36
    }
};

export const optionalIdValidation: Validation =
{
    message: 'Invalid id format',
    STRING:
    {
        required: false,
        maxLength: 36
    }
};

type SortOrderKeys = keyof typeof SortOrder;

export type SortOrder = typeof SortOrder[SortOrderKeys];
