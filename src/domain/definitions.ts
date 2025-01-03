
import type { Validation } from '^/integrations/validation/module';

export const SortOrderEnum = {
    POPULAR: 'popular',
    RECENT: 'recent'
} as const;

export const requiredIdValidation: Validation =
{
    message: 'Value is not a valid id format',
    STRING:
    {
        required: true,
        maxLength: 36
    }
};

export const optionalIdValidation: Validation =
{
    message: 'Value is not a valid id format',
    STRING:
    {
        required: false,
        maxLength: 36
    }
};

type SortOrderKeys = keyof typeof SortOrderEnum;

export type SortOrder = typeof SortOrderEnum[SortOrderKeys];
