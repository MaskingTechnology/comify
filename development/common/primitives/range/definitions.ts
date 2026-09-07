
import { type Validation } from '@theshelf/validation';

export type Range = {
    offset: number;
    limit: number;
};

export const offsetValidation: Validation = {
    message: 'Value is not a valid offset',
    NUMBER: { minValue: 0 }
};

export const limitValidation: Validation = {
    message: 'Value is not a valid limit',
    required: true,
    NUMBER: { minValue: 1, maxValue: 30 }
};
