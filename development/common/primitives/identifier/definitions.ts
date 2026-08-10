
import type { Validation } from '@theshelf/validation';

export type Identifier = string;

export const identifierValidation: Validation = {
    message: 'Value is not a valid identifier',
    UUID: {}
} as const;
