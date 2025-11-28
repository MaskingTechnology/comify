
import type { Validation } from '@theshelf/validation';

import type { SortOrder } from '../definitions';
import { SortOrders } from '../definitions';

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

export { SortOrders, type SortOrder };
